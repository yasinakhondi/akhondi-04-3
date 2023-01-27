const tableHead = $('#tableHead');
const tableBody = $('#tableBody');
let arr1 = Object.keys(tours[0])
let arr2 = Object.values(tours[0])


let x = window.location.search
if (0 < x.indexOf('fields=-')) {

    x = x.slice(9, x.length)
    console.log(a)
}


function render() {
    for (let i = 0; i < arr1.length; i++) {
        if (x == arr1[i]) {
            i++
        }
        tableHead.append(`<th>${arr1[i]}</th>`)
        arr2 = Object.values(tours[i])
        tableBody.append(`<tr>`)
        for (let j = 0; j < arr2.length; j++) {
            tableBody.append(`<td>${arr2[j]}`)
        }
        tableBody.append(`</tr>`)
    }
}

render()