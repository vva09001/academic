import React, { useEffect } from "react";

import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import { ClassStatus } from "../../components/Filter/index";

import Loading from "../../components/Loading";
import AddIcon from "../../assets/svgComponents/Add";
import DeleteIcon from "../../assets/image/Delete.svg";
import NoData from "../../theme/NoData";

import ClassData from "./ClassData.container";
import AddClass from "./ClassDialog/AddDialog/Add.container";
import EditClass from "./ClassDialog/EditDialog/Edit.container";
import ListStudent from "./ClassDialog/ListStudentDialog/ListStudent.container";

const ClassManage = props => {
  /*------------------------------------------------ */
  useEffect(() => {
    props.resetStudentState();
    props.toClasses();
    props.getListStatus();
  },[])

  useEffect(() => {
    props.search(props.searchKey, props.cs_id, props.page);
  }, [props.posting]);
  /*------------------------------------------------ */
  /*function search */
  const onKeyPressSearch = searchKey => {
    props.search(searchKey, props.cs_id, 1);
  };
  return (
    <React.Fragment>
      <Search
        placeholder={"Nhập mã lớp để tìm kiếm..."}
        onKeyPressSearch={searchKey => onKeyPressSearch(searchKey)}
      />
      {props.searchKey !== "" && (
        <div className="searchQuery">
          Tìm kiếm kết quả với từ khóa "{props.searchKey}"{" "}
          <img
            src={DeleteIcon}
            alt="delete"
            height={15}
            width={15}
            onClick={() => props.search("", "", 1)}
          />
        </div>
      )}
      <div className="tableHeading">
        <div>Danh sách lớp học</div>
        <div>
          <AddIcon
            width={30}
            height={30}
            fill="#203e7d"
            classes="addIcon"
            onClick={() => props.openAddDialog()}
          />
        </div>
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th className="cId">Mã lớp</th>
            <th className="cFullname">Tên lớp</th>
            <th className="cStartDate">Ngày bắt đầu</th>
            <th className="ceEndDate">Dự kiến kết thúc</th>
            <th className="cEndDate">Ngày kết thúc</th>
            <th className="cstatus">
              Trạng thái
              <ClassStatus
                list={props.listClassStatus}
                filter={cs_id =>
                  props.search(props.searchKey, cs_id, props.page)
                }
              />
            </th>
            <th />
          </tr>
        </thead>
        <ClassData />
      </table>
      <AddClass />
      <EditClass />
      <ListStudent />
      {props.list.length < 1 && !props.loading && <NoData />}
      {props.loading && (
        <Loading type="TailSpin" height={50} width={50} color="#203e7d" />
      )}
      {Math.ceil(props.total / 30) > 1 && (
        <Pagination
          page={props.page}
          maxPage={Math.ceil(props.total / 30)}
          onPressEnter={page =>
            props.search(props.searchKey, props.cs_id, page)
          }
          prevPage={page => props.search(props.searchKey, props.cs_id, page)}
          nextPage={page => props.search(props.searchKey, props.cs_id, page)}
        />
      )}
    </React.Fragment>
  );
};

export default ClassManage;
