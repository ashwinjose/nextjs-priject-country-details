import React,{useState, useEffect} from "react";
import CountryDetails from 'public/Country.json';
import DataTable from 'react-data-table-component';
import ArrowDownward from '@material-ui/icons/ArrowDownward';


function CountryList(){
    const [countryList, setCountryList] = useState([]);
   const [filterList, setFilterList] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
   const [totalPage,setTotalPage]= useState(0);
   const [ currentPages,setcurrentPages]= useState(0);
   const [ limit,setLimit]= useState(0);
    const [ nextPage,setNextPage]= useState(0)
    const [prevPage,setPrevPage]= useState(0);


    
    const sortIcon = <ArrowDownward />;
    const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
        },
        {
            name: 'Code',
            selector: row => row.sortname,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        }, {
            name: 'Phone Code',
            selector: row => row.phoneCode,
        }
    ];


    // const pagination = paginationFactory({
    //     page: 1,
    //     sizePerPage: 5,
    //     lastPageText: '>>',
    //     firstPageText: '<<',
    //     nextPageText: '<',
    //     prePageText: '>',
    //     showTotal: true,
    //     alwaysShowAllBtns: true,
    //     onPageChange: function(page, sizePerPage){
    //         console.log('page', page);
    //         console.log('sizePerPage', sizePerPage);
    //     },
    //     onSizePerPageChange: function(page, sizePerPage){
    //         console.log('page', page);
    //         console.log('sizePerPage', sizePerPage);
    //     }
    // });

    useEffect(() => {

        setCountryList(CountryDetails.countries)
        setFilterList(countryList)
        setTotalPage(filterList.length);
        setcurrentPages(1);
        setPrevPage(-1);
        setNextPage(2);

    },[countryList]);

    //Search list of objects
const handleSearch = (event) => {
    debugger
    const query = event.target.value;
    setSearchQuery(query);
   
    const searchList = countryList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
   
    setFilterList(searchList);
  };

  const handlePagination = (event) => {
    debugger
    const tempPage = parseInt(event.target.id);
    const result = filterList.slice(currentPage * limit, tempPage * limit);
    setNextPage(tempPage+1);
    setCurrentPage(tempPage+1);
    setPrevPage(tempPage)
   
    setFilterList(result);
  };

   // console.log(countryList);
    
    return <div>
 <input
        type="text"
        name="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
      />
<DataTable
 pagination
 selectableRowsComponentProps={selectProps}
 sortIcon={sortIcon}
            columns={columns}
            data={filterList}
        />
        {/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" id={prevPage} onClick={handlePagination}>Previous</a></li> */}
    {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
    {/* <li class="page-item"><a class="page-link" id={nextPage} onClick={handlePagination}>Next</a></li>
  </ul>
</nav> */}
{/* <BootstrapTable keyField='id' data={ countryList } columns={ columns } /> */}

        {/* <BootstrapTable 
        bootstrap4 
        keyField="id" 
        columns={columns} 
        data={countryList} 
        pagination={pagination}
        /> */}

        {/* <table>
            <tr>
                <th>Id</th>
                <th>Sort Name</th>
                <th>Country Name</th>
                <th>Phone Code</th>
            </tr>
            {
                userList && userList.length ?
                userList.map(usr =>
                    <tr>
                        <td>{usr.id}</td>
                        <td>{usr.sortname}</td>
                        <td>{usr.name}</td>
                        <td>{usr.phoneCode}</td>
                    </tr>
                    )
                    :'Loading Country Details'
            }
        </table> */}
    </div>
}



export default CountryList;