
const Catalogues = [
    {id: "01",name: "Chicken"},
    {id: "02",name: "Beef"},
    {id: "03",name: "Lamb"},
    {id: "04",name: "Pork"},
    {id: "05",name: "Seafood"}
  ];


  const Catalog=(props)=>{
    const catalog = list.map(({ id, name }) => {
        return(
        <div className="row border">
              <div  className="col-1 border d-flex justify-content-center align-items-center">
              <Checkbox          
               key={id}
                type="checkbox"
                name={name}
                id={id}
                handleClick={handleClick}
                isChecked={isCheck.includes(id)}/>
              </div >
              <div  className="col-1 border d-flex justify-content-center align-items-center">
                id
              </div >
              <div  className="col-3 border mx-auto">
                <div className="row border mx-auto" style={{maxHeight:'150px',maxWidth:'150px'}}>
                  {Camera}
                </div>
                <div className="row border d-flex justify-content-center align-items-center">
                  Score
                </div>
                <div className="row border d-flex justify-content-center align-items-center">
                  upload data
                </div>
              </div>
              <div  className="col border">
                <div>
                  name review
                </div>
                <div>
                  film name/ group name
                </div>
                <div>
                  text
                </div>
                <div>
                  Tags:tag
                </div>
              </div>
            </div>)
      })
    return(
        <>
        {catalog}
        </>
    )
  }