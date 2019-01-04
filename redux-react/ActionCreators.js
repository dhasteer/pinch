const baseUrl = "http://localhost:3001/";

export const sendText = (personalname, friendname1, friendphone1, friendname2, friendphone2) => {
	return fetch(baseUrl + 'text/'+personalname+'/'+friendname1+'/'+friendphone1+'/'+friendname2+'/'+friendphone2)
}
export const sendCall = (personalphone) => {
	return fetch(baseUrl + 'call/' +personalphone)
}