
const getInfo = async () => {
    const request = new Request("json/edu.json");
    const response = await fetch(request);
    const cvObj = await response.json();

    return cvObj;
}

const populateCv = (cvObj) => {

    let educationHtml = ``;

    cvObj.education.forEach(element => {

        const listItem = `
        <li>
            <h3>${element.cvheading}</h3>
            <p>
                <span class="job-h4">${element.period}</span><br><br>
                ${element.text}<br><br><br>
            </p>
        </li>`;

        educationHtml += listItem;
    });

    document.getElementById("educationList").innerHTML = educationHtml;

}

const cvObj = await getInfo();
populateCv(cvObj);