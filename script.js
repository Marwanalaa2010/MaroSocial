// تنفيذ الوظائف الجديدة
// الإشعارات وطلبات الصداقة
// يمكنك استخدام AJAX لتحميل البيانات وتحديث القائمة
// أو قم بإنشاء صفحات منفصلة لعرض البيانات وربطها بالروابط

// تحديثات الحالة
const statusForm = document.getElementById('status-form');
const statusUpdates = document.getElementById('status-updates');

statusForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const statusText = document.getElementById('status-text').value;
  const statusUpdate = document.createElement('div');
  statusUpdate.classList.add('status-update');
  statusUpdate.innerHTML = '<p>' + statusText + '</p>';
  statusUpdates.appendChild(statusUpdate);
  document.getElementById('status-text').value = '';
});

// المراسلة الفورية
const chatForm =```javascript
document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const chatInput = document.getElementById('chat-input');
  const messageText = chatInput.value;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = '<p>' + messageText + '</p>';
  chatMessages.appendChild(messageElement);
  chatInput.value = '';
});