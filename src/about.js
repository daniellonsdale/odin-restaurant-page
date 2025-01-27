export function aboutLoad(){
    const contentDiv = document.querySelector('#content');
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('horus-container');

    const hoursContainerH2 = document.createElement('h2');
    hoursContainerH2.textContent = 'Our Hours:';
    hoursContainer.appendChild(hoursContainerH2);

    const hoursContainerUl = document.createElement('ul');
    hoursContainerUl.classList.add('hours-list');
    const hoursContainerUlMon = document.createElement('li');
    const hoursContainerUlTue = document.createElement('li');
    const hoursContainerUlWed = document.createElement('li');
    const hoursContainerUlThu = document.createElement('li');
    const hoursContainerUlFri = document.createElement('li');
    const hoursContainerUlSat = document.createElement('li');
    const hoursContainerUlSun = document.createElement('li');

    const hoursContainerUlMonDaySpan = document.createElement('span');
    hoursContainerUlMonDaySpan.textContent = 'Monday:';
    const hoursContainerUlMonTimeSpan = document.createElement('span');
    hoursContainerUlMonTimeSpan.textContent = '11:00 - 21:00';
    hoursContainerUlMon.appendChild(hoursContainerUlMonDaySpan);
    hoursContainerUlMon.appendChild(hoursContainerUlMonTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlMon);

    const hoursContainerUlTueDaySpan = document.createElement('span');
    hoursContainerUlTueDaySpan.textContent = 'Tuesday:';
    const hoursContainerUlTueTimeSpan = document.createElement('span');
    hoursContainerUlTueTimeSpan.textContent = '11:00 - 21:00';
    hoursContainerUlTue.appendChild(hoursContainerUlTueDaySpan);
    hoursContainerUlTue.appendChild(hoursContainerUlTueTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlTue);

    const hoursContainerUlWedDaySpan = document.createElement('span');
    hoursContainerUlWedDaySpan.textContent = 'Wednesday:';
    const hoursContainerUlWedTimeSpan = document.createElement('span');
    hoursContainerUlWedTimeSpan.textContent = '11:00 - 21:00';
    hoursContainerUlWed.appendChild(hoursContainerUlWedDaySpan);
    hoursContainerUlWed.appendChild(hoursContainerUlWedTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlWed);

    const hoursContainerUlThuDaySpan = document.createElement('span');
    hoursContainerUlThuDaySpan.textContent = 'Thursday:';
    const hoursContainerUlThuTimeSpan = document.createElement('span');
    hoursContainerUlThuTimeSpan.textContent = '11:00 - 21:00';
    hoursContainerUlThu.appendChild(hoursContainerUlThuDaySpan);
    hoursContainerUlThu.appendChild(hoursContainerUlThuTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlThu);

    const hoursContainerUlFriDaySpan = document.createElement('span');
    hoursContainerUlFriDaySpan.textContent = 'Friday:';
    const hoursContainerUlFriTimeSpan = document.createElement('span');
    hoursContainerUlFriTimeSpan.textContent = '11:00 - 23:00';
    hoursContainerUlFri.appendChild(hoursContainerUlFriDaySpan);
    hoursContainerUlFri.appendChild(hoursContainerUlFriTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlFri);

    const hoursContainerUlSatDaySpan = document.createElement('span');
    hoursContainerUlSatDaySpan.textContent = 'Saturday:';
    const hoursContainerUlSatTimeSpan = document.createElement('span');
    hoursContainerUlSatTimeSpan.textContent = '11:00 - 23:00';
    hoursContainerUlSat.appendChild(hoursContainerUlSatDaySpan);
    hoursContainerUlSat.appendChild(hoursContainerUlSatTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlSat);

    const hoursContainerUlSunDaySpan = document.createElement('span');
    hoursContainerUlSunDaySpan.textContent = 'Sunday:';
    const hoursContainerUlSunTimeSpan = document.createElement('span');
    hoursContainerUlSunTimeSpan.textContent = '11:00 - 21:00';
    hoursContainerUlSun.appendChild(hoursContainerUlSunDaySpan);
    hoursContainerUlSun.appendChild(hoursContainerUlSunTimeSpan);
    hoursContainerUl.appendChild(hoursContainerUlSun);

    hoursContainer.appendChild(hoursContainerUl);
    aboutContainer.appendChild(hoursContainer);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    const locationContainerIFrame = document.createElement('iframe');
    locationContainerIFrame.src = "https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1600%20Pennsylvania%20Avenue+(Daniel's%20Burgers)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
    const locationContainerIFrameAnchor = document.createElement('a');
    locationContainerIFrameAnchor.href = "https://www.gps.ie/";
    locationContainerIFrameAnchor.textContent = 'gps devices';
    locationContainerIFrame.appendChild(locationContainerIFrameAnchor);
    locationContainer.appendChild(locationContainerIFrame);
    aboutContainer.appendChild(locationContainer);
    contentDiv.appendChild(aboutContainer);
}