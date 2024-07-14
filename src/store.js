import { configureStore, createSlice } from "@reduxjs/toolkit";

let iconBgSlice = createSlice({
  name:"iconBg",
  initialState:{
    background:"#2b2a2a",
    fill:"white",
    bodyBg:"#111111",
    iconHoverBg:"#FFB400",
    iconLeaveBg:"#2b2a2a"
  },
  reducers:{
    toggleBgWhite : (state,action)=>{
      state.background="#EEEEEE"
      state.fill="#666666"
      state.bodyBg="#ffffff"
      state.iconHoverBg="#FFB400"
      state.iconLeaveBg="#EEEEEE"
    },
    toggleBgBlack : (state,action)=>{
      state.background="#2B2A2A"
      state.iconHoverBg="#FFB400"
      state.iconLeaveBg="#2B2A2A"
      state.fill="white"
      state.bodyBg="#111111"
    }
  }
})

export let iconBgStore = configureStore({
  devTools:false, 
  //by making it false, it will not show the user that how redux is working, by default it is true,we have to make it false in order to protect redux functionality
  reducer:{
    iconBg:iconBgSlice.reducer 
  }
})


let aboutPageSlice = createSlice({
  name:"about",
  initialState:{},
  reducers:{}
})

export let iconBgActions = iconBgSlice.actions

