
                    // Example starter JavaScript for disabling form submissions if there are invalid fields
                    (function() {
//                          'use strict';
//                          window.addEventListener('load', function() {
//                            // Fetch all the forms we want to apply custom Bootstrap validation styles to
//
//                          }, false);


                           var forms = document.getElementsByClassName('needs-validation');
                            // Loop over them and prevent submission
                            var validation = Array.prototype.filter.call(forms, function(form) {
                              form.addEventListener('submit', function(event) {
                                if (form.checkValidity() === false) {
                                  event.preventDefault();
                                  event.stopPropagation();
                                }else{
//                                    alert("test");
                                     event.preventDefault();
                                    event.stopPropagation();
                                     number_click_func(this);

                                    continue_next_page(this);
                                }
                                form.classList.add('was-validated');
                                return false;

                              }, false);
                            });



//                            var forms = document.getElementsByClassName('needs-validation');
//                            forms.addEventListener('submit', function(event) {
//                                if (form.checkValidity() === false) {
//                                  event.preventDefault();
//                                  event.stopPropagation();
//                                }else{
//                                    alert("test");
//                                    continue_next_page(this);
//                                }
//                                form.classList.add('was-validated');
//
//                              }, false);





                    })();
