import { useQuery } from '@tanstack/react-query'
import { getPlaces,getPlacesById,getPlacesByCategory} from "../api"

export const usePlaces = () =>{
    const { data, isloading} = useQuery([],getPlaces);
    return { data, isloading};
}
export const usePlacesByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getPlacesByCategory);
    return { data, isLoading };
  };
 
 export const usePlacesById = (productId) => {
   const { data, isLoading } = useQuery([productId], getPlacesById);
   return { data, isLoading };
 };