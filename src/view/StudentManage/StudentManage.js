import React, { useEffect } from "react";

import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import { StudentStatus, AllProgram } from "../../components/Filter";

import Loading from "../../components/Loading";
import AddIcon from "../../assets/svgComponents/AddStudent";
import DeleteIcon from "../../assets/image/Delete.svg";
import DropdownIcon from "../../assets/image/Dropdown.svg";
import NoData from "../../theme/NoData";

import StudentData from "./StudentData.container";
import StudentDetail from "./StudentDialog/DetailDialog/Detail.container";
import AddStudent from "./StudentDialog/AddDialog/Add.container";
import EditStudent from "./StudentDialog/EditDialog/Edit.container";

const StudentMange = props => {
  /*------------------------------------------------ */
  useEffect(() => {
    props.toStudent();
    props.getListStatus();
  }, []);

  useEffect(() => {
    props.search(
      props.searchKey,
      props.class_id,
      props.ss_id,
      props.programme_id,
      props.page
    );
  }, [props.posting]);
  /*------------------------------------------------ */
  /*function search */
  const onKeyPressSearch = searchKey => {
    props.search(searchKey, props.class_id, "", props.programme_id, 1);
  };
  return (
    <React.Fragment>
      <Search
        placeholder={"Nhập tên hoặc mã sinh viên để tìm kiếm..."}
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
            onClick={() => props.search("", "", 2, "", 1)}
          />
        </div>
      )}
      <div className="tableHeading">
        <div>Danh sách sinh viên</div>
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
            <th className="sId">Mã số</th>
            <th className="sFullname">Họ & Tên</th>
            <th className="sBirth">Ngày sinh</th>
            <th className="sIdcard">Số CMND</th>
            <th className="sPhone">Điện thoại</th>
            <th className="sClass">Mã lớp</th>
            <th className="status">
              Trạng thái <img className="dropdownIcon" src={DropdownIcon} alt="" />
              <StudentStatus
                list={props.listStudentStatus}
                filter={ss_id =>
                  props.search(
                    props.searchKey,
                    props.class_id,
                    ss_id,
                    props.programme_id,
                    1
                  )
                }
              />
            </th>
            <th className="program sProgram">
              Chuyên nghành <img className="dropdownIcon" src={DropdownIcon} alt="" />
              <AllProgram
                list={props.allProgram}
                filter={programme_id =>
                  props.search(
                    props.searchKey,
                    props.class_id,
                    props.ss_id,
                    programme_id,
                    1
                  )
                }
              />
            </th>
            <th />
          </tr>
        </thead>
        {props.list.length > 0 && <StudentData />}
      </table>
      <hr />
      <StudentDetail />
      <AddStudent />
      <EditStudent />
      {props.list.length < 1 && !props.loading && <NoData />}
      {props.loading && (
        <Loading type="TailSpin" height={50} width={50} color="#203e7d" />
      )}
      {Math.ceil(props.total / 30) > 1 && (
        <Pagination
          page={props.page}
          maxPage={Math.ceil(props.total / 30)}
          onPressEnter={page =>
            props.search(
              props.searchKey,
              props.class_id,
              props.ss_id,
              props.programme_id,
              page
            )
          }
          prevPage={page =>
            props.search(
              props.searchKey,
              props.class_id,
              props.ss_id,
              props.programme_id,
              page
            )
          }
          nextPage={page =>
            props.search(
              props.searchKey,
              props.class_id,
              props.ss_id,
              props.programme_id,
              page
            )
          }
        />
      )}
    </React.Fragment>
  );
};

export default StudentMange;
