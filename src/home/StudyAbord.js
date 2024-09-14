

import React from 'react'

function StudyAbord() {
  return (
    <section class="abroad">
    <div class="container mt-5 py-5">
        <div class="row">
            <div class="col-12">
                <h5 class="fw-bold"><span class="underline">Study</span> Abroad</h5>
            </div>
            <div class="col-12 text-center">
                <img src={require("../images/map.png")} class="img-fluid" />
                <div class="text-center mt-4">
                    <button>Explore All Country</button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default StudyAbord