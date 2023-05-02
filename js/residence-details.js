$( document ).ready(function() {
    $('.form-control').not('.fakeinput').on('keyup blur', function (e) {
        $(this).closest('.form-group').removeClass('has-error');
        $(this).removeClass("invalid");
    });
    $('input[type="checkbox"],input[type="radio"]').on('click', function () {
        $(this).removeClass("invalid");
        $(this).closest('.form-group').removeClass('has-error');
        $(this).closest('.radio-option').removeClass('invalid');
        $(this).closest('.check-field').removeClass('invalid');
    });
    $('select').selectmenu();
    $('select').on('change selectmenuchange', function () {
        $(this).closest('.form-group').removeClass('has-error');
    });
    $(".form-group .ui-selectmenu-button").on("focus", function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-group .ui-selectmenu-button").on("focusout", function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });
    $(".form-control").focusin(function () {
        $(this).closest(".form-group").addClass("is-focused");
    });
    $(".form-control").focusout(function () {
        $(this).closest(".form-group").removeClass("is-focused");
    });
    $.validator.addMethod("pan", function (value, element) {
        return this.optional(element) || /^[a-zA-Z]{3}[Pp][a-zA-Z][0-9]{4}[a-zA-Z]$/.test(value) && value.length == 10;
    }, "* Invalid PAN No");
    $.validator.addMethod(
        "email",
        function (value, element) {
            return (
                this.optional(element) ||
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                    )
                    );
                },
        "Enter valid email address !"
    );
    $("#residenceDetails").validate({
        ignore: [],
        errorClass: 'invalid',
        errorPlacement: function (error, element) {
            var errorText = error.text();
            if (element.closest('.form-group').find('.help-block').length < 1) {
                element.closest('.form-group').append('<span class="help-block">');
            }
            element.closest('.form-group').addClass('has-error');
            element.closest('.form-group').find('.help-block').html(errorText);
        },
        highlight: function (element, errorClass) {
            $(element).addClass(errorClass).parent().prev().children("select").addClass(errorClass);
            if ($(element).attr('type') == 'radio' || $(element).attr('type') == 'checkbox') {
                $(element).parent().parent().addClass(errorClass);
            }
        },
        rules: {
            currentAddress1: {
                required: true,
            },
            currentAddress2: {
                required: true,
            },
            currentPincode: {
                required: true,
            },
            currentCity: {
                required: true,
            },
            companyName: {
                required: true,
            },
            designation: {
                required: true,
            },
            officeAddress1: {
                required: true,
            },
            officeAddress2: {
                required: true,
            },
            officePincode: {
                required: true,
            },
            officeCity: {
                required: true,
            },
            emailId: {
                required: true,
                email: true,
            },
            accept: {
                required: true,
            },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});
$(".NumericFormat").autoNumeric({
    mDec: "0",
    lZero: "deny",
    vMax: "9999999"
});
function OnlyCharSpace(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[a-zA-Z ]+$/i);
    return pattern.test(value);
}
function OnlyNumeric(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[0-9]*$/i);
    return pattern.test(value);
}
$('#companyName').bind('keypress', OnlyCharSpace);
$('#designation').bind('keypress', OnlyCharSpace);
$('#officePincode').bind('keypress', OnlyNumeric);
$('#currentPincode').bind('keypress', OnlyNumeric);