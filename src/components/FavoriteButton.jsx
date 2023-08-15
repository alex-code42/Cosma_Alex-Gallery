export default function FavoriteButton({isFavorite,onToggleFavorite}){
    
        console.log(onToggleFavorite);
        if (isFavorite){
            return(
                    <div>
                        <h1>👍</h1>
                    </div>     
                )
            }
            else{
                return(
                    <div>
                        <h1>👎</h1>
                    </div>     
                )
            }
        }