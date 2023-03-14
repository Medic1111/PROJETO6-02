import keto from "../../../assets/keto.png"
import paleo from "../../../assets/paleo4.png"
import vegan from "../../../assets/vegan3.png"

export const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1000: 2,
    620: 1
  };

export const escolherDieta = (Dieta) => {
    let img;
	    if (Dieta==="paleo"){
		img=paleo
			} 
		else if (Dieta==="keto"){
		img=keto
		    }
		else if (Dieta==="vegan"){
		img=vegan
		    }
            return img
  } 