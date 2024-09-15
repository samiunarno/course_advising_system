document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
          label: 'Hours spent',
          data: [3, 4, 3.5, 5, 4.5, 6, 5.2, 7, 6.5, 5],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  });
  