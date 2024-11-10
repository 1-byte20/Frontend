const url = "https://vvri.pythonanywhere.com/api/courses";


function loadCourses() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCourses(data);
        })
        .catch(error => console.log("Hiba történt: " + error));
}


function displayCourses(courses) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <h3>${course.name}</h3>
            <button onclick="viewCourse(${course.id})">Részletek</button>
            <button onclick="deleteCourse(${course.id})">Törlés</button>
        `;
        courseList.appendChild(courseDiv);
    });
}


document.getElementById('course-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const courseName = document.getElementById('course-name').value;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: courseName })
    })
    .then(response => response.json())
    .then(data => {
        loadCourses();
        document.getElementById('course-name').value = '';
    })
    .catch(error => console.log("Hiba történt: " + error));
});


function viewCourse(courseId) {
    fetch(`${url}/${courseId}`)
        .then(response => response.json())
        .then(data => {
            alert(`Kurzus: ${data.name}`);
           
        })
        .catch(error => console.log("Hiba történt: " + error));
}


function deleteCourse(courseId) {
    fetch(`${url}/${courseId}`, {
        method: 'DELETE'
    })
    .then(() => {
        loadCourses();
    })
    .catch(error => console.log("Hiba történt: " + error));
}
loadCourses();