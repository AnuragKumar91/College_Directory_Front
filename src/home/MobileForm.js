import React from 'react';
import { useForm, Controller } from 'react-hook-form';


const MobileForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            mobileNumber: '',
            stream: '',
            message: '',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="row py-5 ">
            <div className="col-12 col-md-6 ">
                <div className="mobile-inner position-relative" style={{ top: "-25px" }}>
                    <div className="mobile-display position-absolute ">


                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-center py-2">
                                    <img src={require("../images/mobileCamera.png")} className='mobile-camera' alt="Mobile Camera" />
                                </div>
                                <h2 className='text-center pt-2'>Fill The Form</h2>
                                <div className=" p-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group mobile-form">
                                            <Controller
                                                name="name"
                                                control={control}
                                                rules={{ required: 'Name is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <input
                                                            {...field}
                                                            type="text"
                                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                            aria-describedby="nameHelp"
                                                            placeholder="Enter your Name"
                                                        />
                                                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                                                    </>
                                                )}
                                            />
                                        </div>

                                        <div className="form-group mobile-form">
                                            <Controller
                                                name="mobileNumber"
                                                control={control}
                                                rules={{
                                                    required: 'Mobile number is required',
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: 'Mobile No. must be 10 digits and number'
                                                    }
                                                }}
                                                render={({ field }) => (
                                                    <>
                                                        <input
                                                            {...field}
                                                            type="digit"
                                                            className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                                                            placeholder="Mobile Number"
                                                        />
                                                        {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber.message}</div>}
                                                    </>
                                                )}
                                            />
                                        </div>
                                        <div className="form-group mobile-form">
                                            <Controller
                                                name="stream"
                                                control={control}
                                                rules={{ required: 'Stream is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <select
                                                            {...field}
                                                            className={`form-control ${errors.stream ? 'is-invalid' : ''}`}
                                                        >
                                                            <option value="">Select Stream</option>
                                                            <option value="Engineering">Engineering</option>
                                                            <option value="Medical">Medical</option>
                                                            <option value="Management">Management</option>
                                                            <option value="Law">Law</option>
                                                        </select>
                                                        {errors.stream && <div className="invalid-feedback">{errors.stream.message}</div>}
                                                    </>
                                                )}
                                            />
                                        </div>


                                        <div className="form-group mobile-form">
                                            <Controller
                                                name="message"
                                                control={control}
                                                rules={{ required: 'Message is required' }}
                                                render={({ field }) => (
                                                    <>
                                                        <textarea
                                                            {...field}
                                                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                            id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            placeholder="Your message"
                                                        />
                                                        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                                                    </>
                                                )}
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn mobile-form-button w-100">SUBMIT</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileForm;
