// // Async and promise tasks

// // Task 1

// function loading() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Yuklandi");
//     }, 3000);
//   });
// }
// loading().then((message) => console.log(message));

// // Task 2

// async function loadCourseData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const courseData = {
//         course: { title: "JavaScript Asoslari" },
//         lessons: ["Dars 1", "Dars 2", "Dars 3"],
//         teacher: { name: "Ali", experience: "5 yil" },
//       };
//       resolve(courseData);
//     }, 2000);
//   })
//     .then((course) => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(course);
//         }, 1000);
//       });
//     })
//     .then((course) => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(course);
//         }, 1500);
//       });
//     });
// }
// loadCourseData().then((data) => console.log(data));

// // Task 3

// async function loadProfile(userId) {
//   const personalInfo = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Ali", age: 30 });
//     }, 2000);
//   });

//   const completedCourses = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["JavaScript", "HTML & CSS"]);
//     }, 1500);
//   });

//   const certificates = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["JavaScript Certificate", "HTML Certificate"]);
//     }, 1000);
//   });

//   return Promise.all([personalInfo, completedCourses, certificates]).then((results) => {
//     return {
//       personalInfo: results[0],
//       completedCourses: results[1],
//       certificates: results[2],
//     };
//   });
// }
// loadProfile(1).then((data) => console.log(data));

// // Task 4

// function loadCourseWithRetry(courseId, attempts = 3) {
//   return new Promise((resolve, reject) => {
//     const tryLoadCourse = (attempt) => {
//       if (Math.random() < 0.5) {
//         reject("Yuklashda xatolik");
//       } else {
//         resolve({ courseId, title: "JavaScript Asoslari" });
//       }
//     };
//     const attemptLoad = () => {
//       if (attempts > 0) {
//         tryLoadCourse(attempts);
//       } else {
//         reject("Yuklashda xatolik");
//       }
//     };
//     attemptLoad();
//   }).catch((error) => {
//     if (attempts > 1) {
//       console.log(`Qayta urinish... (qolgan urinishlar: ${attempts - 1})`);
//       return loadCourseWithRetry(courseId, attempts - 1);
//     } else {
//       return Promise.reject(error);
//     }
//   });
// }
// loadCourseWithRetry(1)
//   .then((course) => console.log(course))
//   .catch((error) => console.log("Yuklashda xatolik"));

// // Task 5

// function uploadFile(file) {
//   return new Promise((resolve) => {
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 10;
//       if (progress <= 100) {
//         console.log(`${progress}% yuklandi`);
//       }
//       if (progress === 100) {
//         clearInterval(interval);
//         resolve("Yuklandi");
//       }
//     }, 1000);
//   });
// }
// uploadFile("file.txt").then((result) => console.log(result));
