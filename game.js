const cdvl = document.getElementById('cdvl');
let code = '';

let x = 0;
const arr = [''];
let cleanLocation = [];

for (let i = 1; i <= 15; i++) arr.push(i);
arr.sort(function () { return Math.random() - 0.5 });

for (let i = 1; i <= 4; i++) {
    code += `<tr>`;
    for (let j = 1; j <= 4; j++) {
        if (arr[x] == '') cleanLocation = [i, j];
        code += `<td id="c${i}${j}" onclick="changeLocation(${i}, ${j})">${arr[x++]}</td>`;
    }
    code += `</tr>`;
}

cdvl.innerHTML = code;

function changeLocation(i, j) {
    if (i == cleanLocation[0] && Math.abs(j - cleanLocation[1]) == 1 ||
        j == cleanLocation[1] && Math.abs(i - cleanLocation[0]) == 1) {
        let cx = document.getElementById(`c${i}${j}`);
        let bx = document.getElementById(`c${cleanLocation[0]}${cleanLocation[1]}`);
        bx.innerHTML = cx.innerHTML;
        cx.innerHTML = '';
        cleanLocation = [i, j];
        checkWin();
    }
}
