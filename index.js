
        document.addEventListener('DOMContentLoaded', function() {
            const body = document.querySelector('body');

            // Create document lines
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.className = 'document-line';
                line.style.top = `${10 + (i * 8)}%`;
                line.style.animationDelay = `${i * 0.2}s`;
                body.appendChild(line);
            }

            // More liquid shapes
            for (let i = 0; i < 3; i++) {
                const shape = document.createElement('div');
                shape.className = 'liquid-shape';
                const size = Math.floor(Math.random() * 200) + 150;
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.floor(Math.random() * 25) + 15;
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
                shape.style.top = `${top}%`;
                shape.style.left = `${left}%`;
                shape.style.animationDelay = `${delay}s`;
                shape.style.animationDuration = `${duration}s`;
                body.appendChild(shape);
            }

            // More bubbles
            for (let i = 0; i < 15; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                const size = Math.floor(Math.random() * 20) + 8;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.floor(Math.random() * 20) + 15;
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.bottom = `-${size}px`;
                bubble.style.left = `${left}%`;
                bubble.style.animationDelay = `${delay}s`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.opacity = Math.random() * 0.4 + 0.1;
                body.appendChild(bubble);
            }

            // Add some random stamps
            for (let i = 0; i < 2; i++) {
                const stamp = document.createElement('div');
                stamp.className = 'stamp';
                const top = Math.random() * 80 + 10;
                const left = Math.random() * 80 + 10;
                const delay = Math.random() * 6;
                stamp.style.top = `${top}%`;
                stamp.style.left = `${left}%`;
                stamp.style.animationDelay = `${delay}s`;
                body.appendChild(stamp);
            }
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.classList.add('loading');
            
            // Simulate government system authentication delay
            setTimeout(function() {
                loginBtn.classList.remove('loading');
                
                // Show official-looking verification message
                const verificationMessages = [
                    "Identity verification in progress...",
                    "Checking security clearance...",
                    "Validating credentials with central database...",
                    "Granting access privileges..."
                ];
                
                let currentMessage = 0;
                const originalText = loginBtn.querySelector('.btn-text').textContent;
                
                const messageInterval = setInterval(() => {
                    loginBtn.querySelector('.btn-text').textContent = verificationMessages[currentMessage];
                    currentMessage++;
                    
                    if (currentMessage >= verificationMessages.length) {
                        clearInterval(messageInterval);
                        loginBtn.querySelector('.btn-text').textContent = "Access Granted";
                        setTimeout(() => {
                            alert("Authentication successful. Redirecting to secure dashboard...");
                            loginBtn.querySelector('.btn-text').textContent = originalText;
                        }, 1000);
                    }
                }, 800);
            }, 2000);
        });

        // Add responsive behavior for window resize
        window.addEventListener('resize', function() {
            // Adjust elements based on screen size
            const seals = document.querySelectorAll('.seal');
            seals.forEach(seal => {
                if (window.innerWidth < 768) {
                    seal.style.width = '100px';
                    seal.style.height = '100px';
                } else {
                    seal.style.width = '150px';
                    seal.style.height = '150px';
                }
            });
        });
 