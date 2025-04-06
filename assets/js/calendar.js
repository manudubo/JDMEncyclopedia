let currentDate = new Date();

function generateCalendar(month, year) {
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthElement = document.querySelector('#current-month');
    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = date.getDay();

    calendarGrid.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day calendar-day-empty';
        calendarGrid.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayElement.classList.add('current-day');
        }
        
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    }

    currentMonthElement.textContent = date.toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });
}

document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

generateCalendar(currentDate.getMonth(), currentDate.getFullYear());