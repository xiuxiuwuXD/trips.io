// js/main.js - Global App Logic & Multilingual Interactions

let curLang = 'zh';

// 1. Language switcher function
function setLang(lang, save = true) {
    curLang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
    }
    if (save) {
        localStorage.setItem('trip_app_lang', lang);
    }
}

// 2. Initialize tab switching behavior
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.style.display = 'none');

            tab.classList.add('active');
            const targetPanel = document.getElementById(`tab-${target}`);
            if (targetPanel) {
                targetPanel.style.display = 'block';
            }
        });
    });
}

// 3. Initialize checklist interactions and progress tracking
function initChecklist() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    const countEl = document.getElementById('cl-count');
    const barEl = document.getElementById('cl-bar');

    function updateProgress() {
        if (!checklistItems.length || !countEl) return;
        const total = checklistItems.length;
        const checkedCount = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
        
        countEl.textContent = `${checkedCount}/${total}`;
        if (barEl) {
            barEl.style.width = `${(checkedCount / total) * 100}%`;
        }
    }

    checklistItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const drill = item.querySelector('.drill');

        if (checkbox) {
            checkbox.addEventListener('change', () => {
                item.classList.toggle('done', checkbox.checked);
                updateProgress();
            });
        }

        if (drill) {
            drill.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('expanded');
            });
        }
    });

    // Handle collapsible group headers
    const groupHeaders = document.querySelectorAll('.checklist-group h3');
    groupHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.closest('.checklist-group');
            if (group) group.classList.toggle('open');
        });
    });

    updateProgress();
}

// 4. Initialize application listeners on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Restore saved language preference from localStorage
    const savedLang = localStorage.getItem('trip_app_lang') || 'zh';
    setLang(savedLang, false);

    // Bind language switch button event listener
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLang(curLang === 'zh' ? 'en' : 'zh', true);
        });
    }

    // Initialize UI components
    initTabs();
    initChecklist();

    // Bind checklist navigation shortcut buttons
    const gotoBtns = document.querySelectorAll('.gocl');
    gotoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const checklistTab = document.querySelector('.tab[data-tab="checklist"]');
            if (checklistTab) checklistTab.click();
        });
    });
});
