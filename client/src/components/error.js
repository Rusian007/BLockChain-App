import React from 'react';

export default function Error ({errmsg}){
	return(
		<>
		<style jsx>{`
		  .error {
		    font-size: 13px;
        color: red;
        font-weight: bolder;
		  }
		`}
		</style>

			<p className="error"> {errmsg} </p>
		</>
		)

};
