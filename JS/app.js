// Initializing a variable to count no. of parameters
let addedParametersCount = 0;

// Hiding the custom parameter box initially.
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user selects custom parameters hide the JSON box. // -> ID --> parameters
document.getElementById('parameters').addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    parametersBox.style.display = '';
});

// If the user selects JSON, hide the custom parameter box. // -> ID --> json
document.getElementById('json').addEventListener('click', () => {
    parametersBox.style.display = 'none';
    document.getElementById('requestJsonBox').style.display = '';
});

// If user clicks on '+' button he should get a next pair of input fiels for key and value.
let addParameters = document.getElementById('addParameters');
addParameters.addEventListener('click', () => {
    addedParametersCount++;
    let param = document.getElementById('parametersBox2');
    let currentString = param.innerHTML;
    let addParamString = `${currentString} <div id="parametersBox" class="row g-3 align-items-top">
                            <div class="col-2">
                                <label for="parametersPairs" class="col-form-label" style="display:none;">Content</label>
                            </div>
                            <div class="col-10">
                                <div class="row g-3 align-items-center my-1">
                                    <div class="col-5">
                                        <input type="text" class="form-control" id="parameterKey${addedParametersCount+1}" placeholder="Enter Parameter ${addedParametersCount+1} Key">
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control" id="parameterValue${addedParametersCount+1}"
                                            placeholder="Enter Parameter  ${addedParametersCount+1}  Value">
                                    </div>
                                    <div class="col-1">
                                        <button class="btn btn-sm btn-primary deleteParameter"> - </button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    param.innerHTML = addParamString;

    // Handling the event when user wants to delete a parameter pair field
    let deleteParameter = document.getElementsByClassName('deleteParameter');
    for (item of deleteParameter) {
        item.addEventListener('click', (e)=> {
            // TODO: can add a confirmation box to prompt the user for the confirmation of deletion.
            e.target.parentElement.parentElement.parentElement.remove();
        });
    }
});

