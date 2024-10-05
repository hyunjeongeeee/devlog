//
// // skills 그래프 부분
//
// // import {Chart} from "chart.js";
//
// const options = {
//     cutout: '65%',
//     animation: {
//         easing: 'easeOutQuint'
//     },
//     responsive: true,
//     plugins: {
//         tooltip: {
//             enabled: false
//         }
//     },
//     events: []
// };
//
// const skills = [
//     { id: "java", values: [85, 15] },
//     { id: "javascript", values: [65, 45] },
//     { id: "html_css", values: [80, 20] },
//     { id: "mysql", values: [76, 24] },
//     { id: "oracle", values: [66, 34] },
//     { id: "jpa", values: [70, 30] },
//     { id: "aws", values: [70, 30] },
//     { id: "docker", values: [60, 40] },
// ];
//
// let offset = 0;
//
// for (const skill of skills) {
//     const canvas = document.querySelector(`#${skill.id}`);
//     if (!canvas) { continue; }
//
//     const ctx = canvas.getContext('2d');
//
//     setTimeout(() => {
//         const chart = new Chart(ctx, {
//             type: 'doughnut',
//             data: {
//                 datasets: [{
//                     data: skill.values,
//                     backgroundColor: ['hsl(150,50%,60%)', 'hsl(0, 0%, 95%)'],
//                     borderWidth: 0
//                 }]
//             },
//             options: options
//         });
//     }, offset);
//
//     offset += 250;
// }