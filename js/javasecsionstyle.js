const section = document.querySelectorAll('.rum');
console.log(section);
for (const sec of section) {
    console.log(sec);
    sec.style.backgroundColor = 'lightblue';
    sec.style.margin = '10px';
    sec.style.padding = '10px';
    sec.style.borderRadius = '10px';
    sec.style.border = '2px solid black';

}