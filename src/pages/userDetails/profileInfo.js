import React from 'react'

function ProfileInfo({singleuser}) {
  return (
    <div>
        <div className='sub-topic'>Personal Information</div>

        <div className='detail-grid detail-grid1'>
            <div className='grid-container'>
                <div className='grid-title'>Full name</div>
                <div className='grid-content'>
                    {singleuser.profile && <p>{singleuser.profile.firstName} {singleuser.profile.lastName}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Phone number</div>
                <div className='grid-content'>
                    <p>{singleuser.phoneNumber}</p>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>email address</div>
                <div className='grid-content'>
                    <p>{singleuser.phoneNumber}</p>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>bvn</div>
                <div className='grid-content'>
                    {singleuser.profile && <p>{singleuser.profile.bvn} </p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Gender</div>
                <div className='grid-content'>
                    {singleuser.profile && <p>{singleuser.profile.gender}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Marital status</div>
                <div className='grid-content'>
                    <p>SINGLE</p>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>children</div>
                <div className='grid-content'>
                    <p> NONE</p>
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Type of residence</div>
                <div className='grid-content'>
                    {singleuser.profile && <p>{singleuser.profile.address}</p>}
                </div>
            </div>
        </div>

        <div className='sub-topic'>Education and Employment</div>
        <div className='detail-grid detail-grid2'>
            <div className='grid-container'>
                <div className='grid-title'>Level of education</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.level}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>employment status</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.employmentStatus}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>sector of employment</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.sector}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>duration of employment</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.duration} </p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Office email</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.officeEmail}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Mmonthly income</div>
                <div className='grid-content'>
                    {/* {singleuser.education && <p>{singleuser.education.monthlyIncome.map((income) =>`N${income.split(" - ")}`) } </p>} */}
                    {singleuser.education && <p>N{singleuser.education.monthlyIncome[0]} - N{singleuser.education.monthlyIncome[1]} </p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Loan repayment</div>
                <div className='grid-content'>
                    {singleuser.education && <p>{singleuser.education.loanRepayment}</p>}
                </div>
            </div>
        </div>

        {/* social */}
    
        <div className='sub-topic'>Socials</div>
        <div className='detail-grid detail-grid3'>
            <div className='grid-container'>
                <div className='grid-title'>Twitter</div>
                <div className='grid-content'>
                    {singleuser.socials && <p>{singleuser.socials.twitter}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Facebook</div>
                <div className='grid-content'>
                    {singleuser.socials && <p>{singleuser.socials.facebook}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>Instagram</div>
                <div className='grid-content'>
                    {singleuser.socials && <p>{singleuser.socials.instagram}</p>}
                </div>
            </div>
        </div>

        {/* guarantor */}
        <div className='sub-topic'>Guarantor</div>
        <div className='detail-grid detail-grid4'>
            <div className='grid-container'>
                <div className='grid-title'>full name</div>
                <div className='grid-content'>
                    {singleuser.guarantor && <p>{singleuser.guarantor.firstName} {singleuser.guarantor.lastName}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>phone number</div>
                <div className='grid-content'>
                    {singleuser.guarantor && <p>{singleuser.guarantor.phoneNumber}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>email address</div>
                <div className='grid-content'>
                    {singleuser.guarantor && <p>{singleuser.guarantor.address}</p>}
                </div>
            </div>

            <div className='grid-container'>
                <div className='grid-title'>relationship</div>
                <div className='grid-content'>
                   <p> brother </p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default ProfileInfo