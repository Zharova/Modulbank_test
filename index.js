$(document).ready(function () {
    $.ajax ({
        url: 'test.json',
        dataType: 'json',
        success: parseJson,
        error: handleError
    });
});

function parseJson(data, status) {
    $('#container').html($('#templateOne').render(data.Data));
    // $('#report-accordion').html($('#templateOne').render(data.Data));
    // $('#accordion').html($('#templateTwo').render(data.Data.Report));


}

function handleError(msg, data) {
    console.log(msg);
}
