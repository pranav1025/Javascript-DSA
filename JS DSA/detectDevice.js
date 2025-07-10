const detectDevice = () => { 
    return/Android|Webos|iPhone|iPad|iPod|BlackBerry|IEMobile|Operamini/i.test(
        navigator.userAgent
    )
    ? 'Mobile'
    : 'Desktop'
  
}  
       console.log(detectDevice());
       