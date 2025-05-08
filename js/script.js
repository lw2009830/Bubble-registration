// 通用函数 - 创建气泡效果
function createBubbleEffect(e, button) {
    const bubble = button.querySelector('.bubble-effect');
    
    // 重置动画
    bubble.style.animation = 'none';
    bubble.offsetHeight; // 触发重绘
    bubble.style.animation = null;
    
    // 设置气泡位置
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
}

// 通用函数 - 显示通知
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationContent = document.querySelector('.notification-content');
    
    if(!notification || !notificationContent) return;
    
    notificationContent.textContent = message;
    notification.className = 'notification';
    notification.classList.add(type);
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// 登录页特定JS
if(document.querySelector('.login-form')) {
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.querySelector('.login-form');
        const loginBtn = document.getElementById('loginBtn');
        const passwordInput = document.getElementById('password');
        
        // 按钮气泡效果
        loginBtn.addEventListener('click', function(e) {
            createBubbleEffect(e, this);
        });
        
        // 彩蛋 - 输入特定密码
        passwordInput.addEventListener('input', function() {
            if(this.value.toLowerCase() === 'meow') {
                showNotification('🐱 喵呜~ 发现彩蛋!', 'success');
            }
        });
        
        // 表单提交
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 模拟登录请求
            setTimeout(() => {
                showNotification('登录成功! 欢迎回来~');
                
                // 3秒后跳转 (模拟)
                setTimeout(() => {
                    // window.location.href = 'dashboard.html';
                    console.log('跳转到仪表盘');
                }, 1500);
            }, 1000);
        });
    });
}

// 注册页特定JS
if(document.querySelector('.register-form')) {
    document.addEventListener('DOMContentLoaded', function() {
        const registerForm = document.querySelector('.register-form');
        const registerBtn = document.getElementById('registerBtn');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        
        // 按钮气泡效果
        registerBtn.addEventListener('click', function(e) {
            createBubbleEffect(e, this);
        });
        
        // 密码验证
        function validatePassword() {
            if(passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity('密码不匹配');
                return false;
            } else {
                confirmPasswordInput.setCustomValidity('');
                return true;
            }
        }
        
        passwordInput.addEventListener('input', validatePassword);
        confirmPasswordInput.addEventListener('input', validatePassword);
        
        // 表单提交
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if(!validatePassword()) {
                showNotification('密码不匹配', 'error');
                return;
            }
            
            // 模拟注册请求
            setTimeout(() => {
                showNotification('注册成功! 欢迎加入Bubble~');
                
                // 重置表单
                registerForm.reset();
                
                // 3秒后跳转 (模拟)
                setTimeout(() => {
                    // window.location.href = 'welcome.html';
                    console.log('跳转到欢迎页面');
                }, 1500);
            }, 1000);
        });
    });
}