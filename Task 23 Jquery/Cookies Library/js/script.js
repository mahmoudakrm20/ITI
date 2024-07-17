
$("#data-form").submit(function(event) {
    event.preventDefault();

    const userName = $("input:first").val();
    const userColor = $("input:eq(3)").val();
    const userGender = $("input[name='gender']:checked").val();

    setCookie("userName", userName);
    setCookie("userGender", userGender);
    setCookie("userColor", userColor);

    window.open('profile.html', '_blank');
});
