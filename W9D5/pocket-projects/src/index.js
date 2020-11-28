import {htmlGenerator} from "./warmup";
import Clock from "./clock";
import * as dropDown from "./drop_down";
import * as todo from "./todo_list";


let clock = new Clock();
dropDown.dogLinkCreator();
dropDown.attachDogLinks();
todo.todoHandler();
todo.checkboxHandler();
