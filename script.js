let submit = s('.calculate');
submit.onclick = () => {
    let uName = s('#userName').value;
    let output = s('#finalage');
    output.innerText = `Hello ${uName} your age = ${finaluserage().year} years ${finaluserage().month} Months ${finaluserage().days} Days`
}