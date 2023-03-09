// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const loading =document.querySelector<HTMLDivElement>('.loading')!;

export const displayLoading=()=>{

    loading.style.display='block'
    
}
export const removeLoading=()=>{

    loading.style.display='none'
    
}
