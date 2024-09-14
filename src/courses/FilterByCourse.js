import React from 'react'

function FilterByCourse() {
    // const filterCategories = [
    //     { name: 'Filter', icon: 'fa-filter' },
    //     { name: 'Popular', icon: '' },
    //     { name: 'Degree', icon: '' },
    //     { name: 'Stream', icon: '' },
    //     { name: 'Program Type', icon: '' },
    //     { name: 'Entrance', icon: '' },
    //     { name: 'Department', icon: '' },
    //     { name: 'Duration', icon: '' },
    //     { name: 'Top Colleges', icon: '' },
    //     { name: 'Popular Cities', icon: '' }
    // ];

    const filterCategories =  ['Filter','Popular','Degree','Stream','Program Type','Entrance','Department','Duration','Top Colleges','Popular Cities']

    const courses =[
        'B.Tech', 'MBA', 'BALLB', 'B.Sc', 'B.Arch', 'B.Des', 'BA', 'Engineering', 'Degree', 'Computer Science'
    ];

    const programs = [
        'Regular', 'Distance', 'Autonomous'
    ];

    const selectedFilters = [
        'B.Tech', 'B.Des', 'Distance'
    ];

    return (
        <>
            <div className="container pt-5 perfect1">
                <div className="row">
                    <div className="col-12">
                        <div className="card-4">
                            <form action="">
                                <button className="mt-4 search-btn w-100 d-flex justify-content-between align-items-center"
                                    style={{ background: '#f7f7f7' }}>
                                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#CCCAD7' }}></i>
                                    <input type="text" placeholder="Enter what are you looking for : College, Course, Specialization" />
                                </button>

                                <div className="mt-4">
                                    {filterCategories.map((category, index) => (

                                        <button key={index} className={` me-2 btn-${index === 0 ? 5 : 7}`}>{category}</button>
                                    ))}
                                </div>

                                <div className="mt-4">
                                    {courses.map((course, index) => (
                                        <div key={index} className="d-inline m-2">
                                            <input type="checkbox" name="course" id={`course-${index}`} />
                                            <label htmlFor={`course-${index}`} className="mx-1">{course}</label>
                                        </div>
                                    ))}
                                </div>

                                <h6 className="mt-3">Course Type</h6>
                                <div>
                                    {programs.map((program, index) => (
                                        <React.Fragment key={index}>
                                            <input type="checkbox" name="program" id={`program-${index}`} />
                                            <label htmlFor={`program-${index}`} className="mx-1">{program}</label>
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    {selectedFilters.map((filter, index) => (
                                        <button key={index} className="btn-8 mt-3">{filter} <i className="fa-solid fa-xmark ms-1"></i></button>
                                    ))}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterByCourse
