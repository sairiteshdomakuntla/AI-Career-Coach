import React from 'react'

const CoverLetter =async ({params}) => {
    // console.log(params.id);
    const id=await params.id;
  return (
    <div>
      CoverLetter: {id}
    </div>
  )
}

export default CoverLetter
