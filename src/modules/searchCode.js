import ajaxService from "./ajaxService";

const searchCode =()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const City = document.querySelector('.city').value;
        let searchResponse;
        ajaxService(searchTerm, City)
        .then(result=>searchResponse=result)
        .then(()=>console.log(searchResponse))
        .then(()=>{
            const resultElement = document.querySelector(".result");
                if (searchResponse.data[0].post_code !== null) {
                    resultElement.value = searchResponse.data[0].post_code;
                } else {
                    resultElement.value = "nerastas";
            }
        })
    })
}

export default searchCode