// Hackis UI Interactions

// Tabs functionality
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Remove active from all tabs in this container
        tabs.forEach(t => t.classList.remove('active'));
        // Hide all tab contents in this container
        const tabContents = tabContainer.parentElement.querySelectorAll('.tab-content');
        tabContents.forEach(tc => tc.classList.remove('active'));
        // Activate clicked tab and its content
        this.classList.add('active');
        const target = this.getAttribute('data-tab');
        const content = tabContainer.parentElement.querySelector(`#${target}`);
        if (content) content.classList.add('active');
      });
    });
  });
});