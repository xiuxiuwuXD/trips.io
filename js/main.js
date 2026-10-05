// js/main.js - Shared Global Application Logic

let curLang = 'zh';

// 1. Language Switcher Function
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

// 2. Detect Preferred Browser Language Automatically
function detectBrowserLanguage() {
    const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return userLang.startsWith('zh') ? 'zh' : 'en';
}

// 3. Initialize Tab Switching Behavior
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

// 4. Initialize Checklist Interactions and Progress Tracking
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
            // Remove existing listener to prevent duplicate binding
            drill.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                item.classList.toggle('expanded');
            };
        }
    });

    // Handle Collapsible Group Headers
    const groupHeaders = document.querySelectorAll('.checklist-group h3');
    groupHeaders.forEach(header => {
        header.onclick = () => {
            const group = header.closest('.checklist-group');
            if (group) group.classList.toggle('open');
        };
    });

    updateProgress();
}

// 5. Initialize Application Listeners on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Priority: Saved preference > Automatically detected browser language
    const savedLang = localStorage.getItem('trip_app_lang');
    const initialLang = savedLang || detectBrowserLanguage();
    setLang(initialLang, false);

    // Bind Language Switch Button Event Listener
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLang(curLang === 'zh' ? 'en' : 'zh', true);
        });
    }

    // Initialize UI Components
    initTabs();
    initChecklist();

    // Bind Checklist Navigation Shortcut Buttons
    const gotoBtns = document.querySelectorAll('.gocl');
    gotoBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const checklistTab = document.querySelector('.tab[data-tab="checklist"]');
            if (checklistTab) checklistTab.click();
        });
    });
});
