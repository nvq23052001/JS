function Validator(formSelector) {
    const formRules = {};

    // Rules của từng input
    const validatorRules = {
        required(value) {
            return value.trim() ? undefined : 'Trường này không được để trống';
        },

        email(value) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : 'Không đúng định dạng email';
        },

        min(min) {
            return (value) => {
                return value.length >= min ? undefined : `Mật khẩu phải có ít nhất ${min} ký tự`;
            }
        },

        retype(value) {
            const password = document.getElementById('password').value;
            return value === password ? undefined : 'Mật khẩu nhập lại không khớp';
        }

    }

    // Lấy ra form element
    const formElement = document.querySelector(formSelector);

    // Xử lý khi có formElement
    if (formElement) {

        // Lấy ra tất cả input
        const inputs = formElement.querySelectorAll('[name][rules]')

        // Gán key: value cho obj formRules
        inputs.forEach((input) => {

            //Tách value ra từng phần
            const rules = input.getAttribute('rules').split('|');
            rules.forEach((rule) => {
                let ruleInfo;
                const isRuleHasValue = rule.includes(':');
                if (isRuleHasValue) {
                    // Bỏ dấu : 
                    ruleInfo = rule.split(':');

                    // Gán ruleInfo cho rule
                    rule = ruleInfo[0];
                }

                let ruleFunc = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            })

            // Lắng nghe sự kiện validate
            input.addEventListener('blur', handleValidate);
            input.addEventListener('input', handleClearError);


        });

        function handleValidate(e) {
            const rules = formRules[e.target.name];
            let errorMessage;

            rules.some((rule) => {
                errorMessage = rule(e.target.value);
                return errorMessage;
            })

            if (errorMessage) {
                const formGroup = getParentElement(e.target, '.form-group');
                console.log( formGroup);

                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerHTML = errorMessage;

                    }
                }
            }
            return !errorMessage;
        }

        function handleClearError(e) {
            const formGroup = getParentElement(e.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerHTML = '';

                }
            }
        }

        function getParentElement(element, selector) {
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement;
                }
                element = element.parentElement;
            }
        }

        // Xử lý hành vi mặc định submit form

        formElement.addEventListener('submit', function (e) {
            e.preventDefault();
            // Lấy ra tất cả input
            const inputs = formElement.querySelectorAll('[name][rules]')
            let isValid = true;
            // Gán key: value cho obj formRules
            inputs.forEach((input) => {

                if (!handleValidate({
                        target: input
                    })) {
                    isValid = false;
                }

            })

        })
    }
}

export default Validator;