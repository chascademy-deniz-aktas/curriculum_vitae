
const getInfo = async () => {
    const request = new Request("json/cv.json");
    const response = await fetch(request);
    const cvObj = await response.json();

    return cvObj;
}

const populateCv = (cvObj) => {

    let employmentHtml = ``;

    cvObj.employment.forEach(element => {

        const listItem = `
        <li>
            <h3>${element.cvheading}</h3>
            <p>
                <span class="job-h4">${element.title}</span><br>
                <span class="job-h4">${element.period}</span><br><br>
                ${element.text}<br><br><br>
            </p>
        </li>`;

        employmentHtml += listItem;

    });

    document.getElementById("employmentList").innerHTML = employmentHtml;

}

const cvObj = await getInfo();
populateCv(cvObj);