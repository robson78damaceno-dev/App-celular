// PWA Configuration and Utilities
class PWAConfig {
    constructor() {
        this.appName = 'App de Contas';
        this.version = '1.0.0';
        this.cacheName = 'app-contas-v1';
        this.offlineMessage = 'Você está offline. Algumas funcionalidades podem estar limitadas.';
    }

    // Initialize PWA
    async init() {
        await this.registerServiceWorker();
        this.setupInstallPrompt();
        this.setupOfflineDetection();
        this.setupUpdateNotifications();
        this.setupBackgroundSync();
    }

    // Register Service Worker
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('✅ Service Worker registrado:', registration);
                
                // Handle updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            this.showUpdateNotification();
                        }
                    });
                });

                return registration;
            } catch (error) {
                console.error('❌ Erro ao registrar Service Worker:', error);
            }
        }
    }

    // Setup install prompt
    setupInstallPrompt() {
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log('📱 PWA install prompt disponível');
            e.preventDefault();
            deferredPrompt = e;
            this.showInstallButton();
        });

        window.addEventListener('appinstalled', () => {
            console.log('🎉 PWA instalado com sucesso!');
            this.hideInstallButton();
            this.trackInstallation();
        });
    }

    // Show install button
    showInstallButton() {
        if (!document.getElementById('pwa-install-btn')) {
            const installBtn = document.createElement('button');
            installBtn.id = 'pwa-install-btn';
            installBtn.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-50 flex items-center space-x-2';
            installBtn.innerHTML = `
                <span class="text-lg">📱</span>
                <span class="text-sm font-semibold">Instalar App</span>
            `;
            installBtn.onclick = () => this.installPWA();
            document.body.appendChild(installBtn);
        }
    }

    // Hide install button
    hideInstallButton() {
        const installBtn = document.getElementById('pwa-install-btn');
        if (installBtn) {
            installBtn.remove();
        }
    }

    // Install PWA
    async installPWA() {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`PWA install: ${outcome}`);
            deferredPrompt = null;
            this.hideInstallButton();
        }
    }

    // Setup offline detection
    setupOfflineDetection() {
        const statusElement = document.getElementById('connection-status');
        
        window.addEventListener('online', () => {
            console.log('🟢 App online');
            this.showOnlineStatus();
            this.syncOfflineData();
        });

        window.addEventListener('offline', () => {
            console.log('🔴 App offline');
            this.showOfflineStatus();
        });

        // Initial status
        if (navigator.onLine) {
            this.showOnlineStatus();
        } else {
            this.showOfflineStatus();
        }
    }

    // Show online status
    showOnlineStatus() {
        const status = document.getElementById('connection-status');
        if (status) {
            status.textContent = '🟢 Online';
            status.className = 'fixed top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs z-50';
        }
    }

    // Show offline status
    showOfflineStatus() {
        const status = document.getElementById('connection-status');
        if (status) {
            status.textContent = '🔴 Offline';
            status.className = 'fixed top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs z-50';
        }
        
        // Show offline notification
        this.showNotification(this.offlineMessage, 'warning');
    }

    // Setup update notifications
    setupUpdateNotifications() {
        // Check for updates every 30 minutes
        setInterval(() => {
            this.checkForUpdates();
        }, 30 * 60 * 1000);
    }

    // Check for updates
    async checkForUpdates() {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration) {
                await registration.update();
            }
        }
    }

    // Show update notification
    showUpdateNotification() {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 left-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg z-50';
        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>🔄 Nova versão disponível!</span>
                <button onclick="pwaConfig.updateApp()" class="bg-white text-green-500 px-3 py-1 rounded text-sm font-semibold">
                    Atualizar
                </button>
            </div>
        `;
        document.body.appendChild(notification);

        // Auto remove after 10 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 10000);
    }

    // Update app
    async updateApp() {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
            }
        }
    }

    // Setup background sync
    setupBackgroundSync() {
        if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
            navigator.serviceWorker.ready.then(registration => {
                // Register background sync
                registration.sync.register('background-sync');
            });
        }
    }

    // Sync offline data
    async syncOfflineData() {
        // Sync any offline data when coming back online
        console.log('🔄 Sincronizando dados offline...');
        
        // Here you would sync any offline data
        // For this app, data is stored in localStorage, so no sync needed
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const bgColor = type === 'warning' ? 'bg-yellow-500' : 
                       type === 'error' ? 'bg-red-500' : 'bg-blue-500';
        
        notification.className = `fixed top-4 left-4 right-4 ${bgColor} text-white p-3 rounded-lg shadow-lg z-50`;
        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
                    ✕
                </button>
            </div>
        `;
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Track installation
    trackInstallation() {
        // Track PWA installation
        const installData = {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };
        
        localStorage.setItem('pwa-installation', JSON.stringify(installData));
        console.log('📊 PWA installation tracked:', installData);
    }

    // Get app info
    getAppInfo() {
        return {
            name: this.appName,
            version: this.version,
            installed: localStorage.getItem('pwa-installation') !== null,
            online: navigator.onLine,
            serviceWorker: 'serviceWorker' in navigator
        };
    }

    // Export data for backup
    exportData() {
        const data = {
            transactions: JSON.parse(localStorage.getItem('transactions') || '[]'),
            priorityBills: JSON.parse(localStorage.getItem('priorityBills') || '[]'),
            appInfo: this.getAppInfo(),
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `app-contas-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    // Import data from backup
    importData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.transactions && data.priorityBills) {
                        localStorage.setItem('transactions', JSON.stringify(data.transactions));
                        localStorage.setItem('priorityBills', JSON.stringify(data.priorityBills));
                        resolve(data);
                    } else {
                        reject(new Error('Arquivo inválido'));
                    }
                } catch (error) {
                    reject(error);
                }
            };
            reader.readAsText(file);
        });
    }
}

// Initialize PWA when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.pwaConfig = new PWAConfig();
    window.pwaConfig.init();
});

// Export for global access
window.PWAConfig = PWAConfig;
