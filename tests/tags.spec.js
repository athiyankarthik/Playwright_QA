import {test, expect} from '@playwright/test'

test("test one @reg", async ()=>{
    console.log("test one executed successfully");
})

test("test two @reg", async ()=>{
    console.log("test two executed successfully");
})

test("test three @reg", async ()=>{
    console.log("test three executed successfully");
})

test("test four @reg @sanity", async ()=>{
    console.log("test four executed successfully");
})

test("test five @smoke", async ()=>{
    console.log("test five executed successfully");
})

test("test six @sanity", async ()=>{
    console.log("test six executed successfully");
})