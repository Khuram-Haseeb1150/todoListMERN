import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import "../css/todoList.css";
import DatePicker from "react-date-picker";
import {
  getPosts,
  addPost,
  updateTodoList,
  DelteTodoList,
} from "../Redux/Actions/FirstAction";

import {
  addTodo,
  getTodo,
  updateTodo,
  DelteTodo,
} from "../Redux/Actions/SecondAction";

import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [check, setcheck] = useState(true);

  const [checkinput, setcheckinput] = useState(false);
  const [id, setid] = useState("");

  const [date, setDate] = useState(new Date());
  const [title, settitle] = useState("");
  const [mark, setmark] = useState(false);

  const [color, setColor] = useState("");
  const [updateid, setupdateId] = useState("");
  const [checkupdate, setcheckupdate] = useState(true);

  const todoList = useSelector(
    (state) => state.reducerGroupOne.FirstReducer.todoList
  );

  const isLoading = useSelector(
    (state) => state.reducerGroupOne.FirstReducer.isLoading
  );

  const secondLoading = useSelector(
    (state) => state.reducerGroupOne.FirstReducer.secondLoading
  );
  const secondTodo = useSelector(
    (state) => state.reducerGroupOne.FirstReducer.secondTodo
  );
  // console.log(`secondTodo`,secondTodo);
  useEffect(() => {
    if (isLoading) {
      dispatch(getPosts());
    }
  }, [name, todoList]);

  const goalInputHandler = (enterText) => {
    setName(enterText);
  };

  const updatedata = (e) => {
    e.preventDefault();
    setcheck(true);
    const todoList = {
      name: name,
    };

    dispatch(updateTodoList(id, todoList));
    setName("");
  };

  const sumbitData = (e) => {
    setcheck(true);
    e.preventDefault();
    const todoList = {
      name: name,
    };

    dispatch(addPost(todoList));
    setName("");
  };

  const handledelete = (tododata) => {
    if (!isLoading) {
      dispatch(DelteTodoList(tododata));
    }
  };

  const deleteTodoSingle = (deletetodo) => {
    if (!secondLoading) {
      dispatch(DelteTodo(deletetodo));
    }
  };

  const edithandler = (id) => {
    setcheck(false);

    setid(id);
  };

  const updateHandler = (id) => {
    setcheckupdate(false);
    setupdateId(id);
  };

  const titleHandle = (enterText) => {
    settitle(enterText);
  };

  const sumbittodo = (e) => {
    e.preventDefault();
    const todoSingle = {
      title: title,
      dueDate: date,
      marked: mark,
    };

    dispatch(addTodo(id, todoSingle));
    settitle("");
    setDate("");
  };

  const updateTododata = (e) => {
    e.preventDefault();
    setcheckupdate(true);
    const todoSingle = {
      title: title,
      dueDate: date.toLocaleDateString("en-CA"),
      marked: mark,
    };

    dispatch(updateTodo(updateid, todoSingle));
    setDate("");
    settitle("");
  };


 

  return (
    <Container className="landing  my-5" fluid>
      <Row>
        {/* todoList form */}

        <Col md={4} lg={4} sm={12} xs={12}>
          <input
            // id="formBasicInput"
            type="text"
            autocomplete="off"
            // htmlFor="formBasicCheckbox2"
            className="form-control-1"
            placeholder="Enter Name of list"
            value={name}
            onChange={(event) => {
              goalInputHandler(event.target.value);
            }}
          />
          {check ? (
            <Button
              variant="primary"
              className="nav1 search-inner-btn ml-1 nav1"
              onClick={(e) => {
                sumbitData(e);
              }}
            >
              Add
            </Button>
          ) : (
            <Button
              variant="primary"
              className="nav1 search-inner-btn ml-1 "
              onClick={(e) => {
                updatedata(e);
              }}
            >
              Update
            </Button>
          )}
        </Col>

        {/* todo form */}
        {checkinput ? (
          <Col md={8} md={8} lg={8} sm={12} xs={12}>
            <input
              id="formBasicInput"
              type="text"
              autocomplete="off"
              htmlFor="formBasicCheckbox2"
              className="form-control-1 v2 ml-5"
              placeholder="Enter title"
              value={title}
              onChange={(event) => {
                titleHandle(event.target.value);
              }}
            />
            <DatePicker value={date} onChange={setDate} className="v2" />
            {checkupdate ? (
              <Button
                variant="primary"
                className="search-inner-btn ml-1 nav2"
                onClick={(e) => {
                  sumbittodo(e);
                }}
              >
                Add Todo
              </Button>
            ) : (
              <Button
                variant="primary"
                className="search-inner-btn ml-1 nav2"
                onClick={(e) => {
                  updateTododata(e);
                }}
              >
                Update Todo
              </Button>
            )}
          </Col>
        ) : null}
      </Row>
      <Row className="mt-3">
        {/* todo list display */}
        <Col md={12} lg={4} sm={12} xs={12}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th> Name</th>

                <th style={{ textAlign: "end" }}>Edit</th>
                <th style={{ textAlign: "end" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoList &&
                todoList.map((tododata, i) => {
                  return (
                    <tr
                      key={i}
                      onClick={() => {
                        setcheckinput(true);
                        setid(tododata._id);
                        dispatch(getTodo(tododata._id));
                      }}
                    >
                      <td style={{ cursor: "pointer" }}>{tododata.name}</td>

                      <td
                        style={{ textAlign: "end" }}
                        onClick={() => {
                          edithandler(tododata._id);
                          setName(tododata.name);
                        }}
                      >
                        <i class="fa fa-lg fa-pencil"></i>
                      </td>
                      <td
                        style={{ textAlign: "end" }}
                        onClick={() => handledelete(tododata._id)}
                      >
                        <i class="fa fa-lg fa-times"></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Col>

        {/* todo  display */}
        {checkinput ? (
          <Col md={8} md={12} lg={8} sm={12} xs={12}>
            <Table responsive="sm">
              <thead>
                <tr>
                  <th> Check</th>
                  <th>Title</th>
                  <th style={{ textAlign: "end" }}>Date</th>
                  <th style={{ textAlign: "end" }}>Edit</th>
                  <th style={{ textAlign: "center" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {secondTodo &&
                  secondTodo.map((second) => (
                    <tr>
                       <td >
                       <i class="fa fa-lg fa-check"></i>
                       
                      
                      </td>
                      <td>{second.title}</td>
                      <td style={{ textAlign: "end" }}>
                        {new Date(second.dueDate).toLocaleDateString()}
                      </td>
                      <td
                        style={{ textAlign: "end" }}
                        onClick={() => {
                          updateHandler(second._id);
                          settitle(second.title);
                        }}
                      >
                        <i class="fa fa-lg fa-pencil"></i>
                      </td>
                      <td
                        style={{ textAlign: "center" }}
                        onClick={() => deleteTodoSingle(second._id)}
                      >
                        <i class="fa fa-lg fa-times"></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default TodoList;
