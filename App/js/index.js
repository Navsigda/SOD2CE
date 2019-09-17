xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a":1,
                    "b":2
                })
                .beforeInvoke([
                    {
                        "desc":"Busy",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"busy"
                    }
                ])
                .onData([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
                .onError([
                    {
                        "desc":"free UI",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("70em")
                .setHeight("66.66666666666667em")
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group2")
                .setLeft("1.6666666666666667em")
                .setTop("12.5em")
                .setWidth("28.333333333333332em")
                .setHeight("7.833333333333333em")
                .setOverflow("hidden")
                .setCaption("System Message")
                .setToggleBtn(false)
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton2")
                .setDesc("Alert Test")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setZIndex(1002)
                .setCaption("Alert Test")
                .onClick([
                    {
                        "desc":"alert",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Title",
                            "Alert Message"
                        ],
                        "method":"alert",
                        "onOK":2
                    },
                    {
                        "desc":"next",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Hi",
                            "You closed alert dialog"
                        ],
                        "method":"message"
                    }
                ])
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton115")
                .setDesc("Pop Message")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setCaption("Pop Message")
                .onClick([
                    {
                        "desc":"message",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Title",
                            "Pop Message"
                        ],
                        "method":"pop"
                    }
                ])
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton32")
                .setDesc("Floating Message")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.333333333333334em")
                .setHeight("2.8333333333333335em")
                .setCaption("Floating Message")
                .onClick([
                    {
                        "desc":"action",
                        "type":"other",
                        "target":"msg",
                        "params":[
                            "Body",
                            "Title",
                            400,
                            5000
                        ],
                        "method":"message"
                    }
                ])
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton63")
                .setDesc("Show Waiting")
                .setLeft("19.166666666666668em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setCaption("Show Waiting")
                .onClick([
                    {
                        "desc":"wait",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"busy"
                    },
                    {
                        "desc":"ok",
                        "type":"other",
                        "target":"msg",
                        "params":[ ],
                        "method":"free",
                        "timeout":1000
                    }
                ])
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton120")
                .setDesc("Confirm Test")
                .setLeft("0.8333333333333334em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setZIndex(1002)
                .setCaption("Confirm Test")
                .onClick([
                    {
                        "desc":"confirm",
                        "type":"other",
                        "target":"msg",
                        "method":"confirm",
                        "args":[
                            "Confirm",
                            "Continuew to exec?"
                        ],
                        "okFlag":"_confirm_yes",
                        "koFlag":"_confirm_no",
                        "event":1,
                        "onOK":2,
                        "onKO":3
                    },
                    {
                        "desc":"yes",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "args":[
                            "You confirmed it",
                            "Yes"
                        ],
                        "conditions":[
                            {
                                "left":"{temp._confirm_yes}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    },
                    {
                        "desc":"no",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "You didn't confirm it",
                            "No"
                        ],
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{temp._confirm_no}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_group2.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton162")
                .setDesc("Prompt Test")
                .setLeft("10em")
                .setTop("3.3333333333333335em")
                .setWidth("8.333333333333334em")
                .setHeight("2.5em")
                .setZIndex(1002)
                .setCaption("Prompt Test")
                .onClick([
                    {
                        "desc":"prompt",
                        "type":"other",
                        "target":"msg",
                        "method":"prompt",
                        "args":[
                            "Title",
                            "Continuew to exec?",
                            "text"
                        ],
                        "okFlag":"_prompt_ok",
                        "koFlag":"_prompt_cancel",
                        "event":1,
                        "onOK":3,
                        "onKO":4
                    },
                    {
                        "desc":"ok",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "conditions":[
                            {
                                "left":"{temp._prompt_ok}",
                                "symbol":"defined",
                                "right":""
                            }
                        ],
                        "args":[
                            "Your input is '{temp.okData}'",
                            "ok"
                        ]
                    },
                    {
                        "desc":"cancel",
                        "type":"other",
                        "target":"msg",
                        "method":"message",
                        "args":[
                            "You cancelled the prompt",
                            "cancel"
                        ],
                        "conditions":[
                            {
                                "left":"{temp._prompt_cancel}",
                                "symbol":"defined",
                                "right":""
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group10")
                .setLeft("27.5em")
                .setTop("27.5em")
                .setWidth("37.5em")
                .setHeight("18.333333333333332em")
                .setOverflow("hidden")
                .setCaption("Items and Rows")
                .setToggleBtn(false)
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton90")
                .setDesc("Clear Items in TreeView")
                .setLeft("28.333333333333332em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Items in TreeView")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[ ],
                        "method":"clearItems"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton91")
                .setDesc("Clear Rows")
                .setLeft("28.333333333333332em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Rows")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[ ],
                        "method":"removeAllRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton92")
                .setDesc("Clear Columns")
                .setLeft("28.333333333333332em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Clear Columns")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[ ],
                        "method":"setHeader"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton103")
                .setDesc("Remove Items in TreeView")
                .setLeft("19.166666666666668em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Items in TreeView")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node1;node2"
                        ],
                        "method":"removeItems"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "first"
                        ],
                        "method":"removeItems"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton104")
                .setDesc("Remove Row")
                .setLeft("19.166666666666668em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Rows")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row1;row2"
                        ],
                        "method":"removeRows"
                    },
                    {
                        "desc":"action2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "first"
                        ],
                        "method":"removeRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton105")
                .setDesc("Remove Columns")
                .setLeft("19.166666666666668em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Remove Columns")
                .onClick([
                    {
                        "desc":"action",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "col3;col4"
                        ],
                        "method":"removeCols"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton164")
                .setDesc("Insert Items to TreeBar")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Insert Items to TreeBar")
                .onClick([
                    {
                        "desc":"first",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"first",
                                    "caption":"first",
                                    "sub":[
                                        {
                                            "id":"node2.51",
                                            "caption":"node2.5"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"last",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"last",
                                    "caption":"last"
                                }
                            ],
                            null,
                            null,
                            false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"a 1",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"a node2",
                                    "caption":"a node2"
                                }
                            ],
                            null,
                            "node2",
                            false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"a 2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"a last",
                                    "caption":"a last"
                                }
                            ],
                            null,
                            "last",
                            false
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"b 1",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"b node1",
                                    "caption":"b node1"
                                }
                            ],
                            null,
                            "node1",
                            true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"b 2",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"b last",
                                    "caption":"b  last"
                                }
                            ],
                            null,
                            "last",
                            true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"subfirst",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"subfirst",
                                    "caption":"subfirst"
                                }
                            ],
                            "node1",
                            null,
                            true
                        ],
                        "method":"insertItems"
                    },
                    {
                        "desc":"sublast",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            [
                                {
                                    "id":"sublast",
                                    "caption":"sublast"
                                }
                            ],
                            "node1",
                            null,
                            false
                        ],
                        "method":"insertItems"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton165")
                .setDesc("Insert Rows to TreeGrid")
                .setLeft("0.8333333333333334em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Insert Rows to TreeGrid")
                .onClick([
                    {
                        "desc":"first",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"first",
                                    "caption":"first",
                                    "cells":[
                                        {
                                            "value":"a"
                                        },
                                        {
                                            "value":"b"
                                        },
                                        {
                                            "value":"c"
                                        },
                                        {
                                            "value":"d"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"last",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"last",
                                    "caption":"last",
                                    "cells":[
                                        {
                                            "value":"d"
                                        },
                                        {
                                            "value":"d"
                                        },
                                        {
                                            "value":"w"
                                        },
                                        {
                                            "value":"s"
                                        }
                                    ]
                                }
                            ],
                            null,
                            null,
                            false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"b1",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"b row2",
                                    "caption":"b row2",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,
                            "row2",
                            true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"b2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"b last",
                                    "caption":"b last",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,
                            "last",
                            true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"a 1",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"a row2",
                                    "caption":"a row2",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,
                            "row2",
                            false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"a 2",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"a first",
                                    "caption":"a first",
                                    "cells":[
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            null,
                            "first",
                            false
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"subfirst",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"subfirst",
                                    "cells":[
                                        {
                                            "value":"subfirst"
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            "row2",
                            null,
                            true
                        ],
                        "method":"insertRows"
                    },
                    {
                        "desc":"sublast",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            [
                                {
                                    "id":"sublast",
                                    "cells":[
                                        {
                                            "value":"sublast"
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        },
                                        {
                                            "value":""
                                        }
                                    ]
                                }
                            ],
                            "row2",
                            "",
                            false
                        ],
                        "method":"insertRows"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton401")
                .setDesc("Update Item in  TreeView")
                .setLeft("10em")
                .setTop("4.166666666666667em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Item in TreeView")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            {
                                "caption":"NODE2"
                            }
                        ],
                        "method":"updateItem"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "last",
                            {
                                "caption":"[last]"
                            }
                        ],
                        "method":"updateItem"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton477")
                .setDesc("Update Row in Grid")
                .setLeft("10em")
                .setTop("8.333333333333334em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Row in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            {
                                "caption":"ROW2"
                            }
                        ],
                        "method":"updateRow"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "first",
                            {
                                "height":80
                            }
                        ],
                        "method":"updateRow"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton478")
                .setDesc("Update Column in Grid")
                .setLeft("10em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Column in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "col3",
                            {
                                "caption":"abva",
                                "width":30
                            }
                        ],
                        "method":"updateHeader"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton479")
                .setDesc("Update Cell in Grid")
                .setLeft("0.8333333333333334em")
                .setTop("12.5em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Update Cell in Grid")
                .onClick([
                    {
                        "desc":"a",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "1:1",
                            {
                                "value":"1:1"
                            }
                        ],
                        "method":"updateCellByRowCol2"
                    },
                    {
                        "desc":"b",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "0:0",
                            {
                                "value":"0:0"
                            }
                        ],
                        "method":"updateCellByRowCol2"
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton67")
                .setDesc("Toggle Panel")
                .setLeft("0.8333333333333334em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle Panel")
                .onClick([
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[
                            false,
                            false
                        ],
                        "method":"setToggle"
                    },
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_panel7",
                        "params":[
                            true,
                            true
                        ],
                        "method":"setToggle",
                        "timeout":500
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton68")
                .setDesc("Toggle TreeView")
                .setLeft("10em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle TreeView")
                .onClick([
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            true
                        ],
                        "method":"toggleNode"
                    },
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_treeview5",
                        "params":[
                            "node2",
                            false
                        ],
                        "method":"toggleNode",
                        "timeout":800
                    }
                ])
            );
            
            host.ctl_group10.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton114")
                .setDesc("Toggle TreeGrid")
                .setLeft("19.166666666666668em")
                .setTop("0em")
                .setWidth("8.5em")
                .setHeight("3.3333333333333335em")
                .setCaption("Toggle TreeGrid")
                .onClick([
                    {
                        "desc":"expand",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            true
                        ],
                        "method":"toggleRow"
                    },
                    {
                        "desc":"fold",
                        "type":"control",
                        "target":"ctl_treegrid5",
                        "params":[
                            "row2",
                            false
                        ],
                        "method":"toggleRow",
                        "timeout":800
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Label")
                .setHost(host,"ctl_slabel8")
                .setSpaceUnit("px")
                .setLeft("220px")
                .setTop("10px")
                .setWidth("334px")
                .setHeight("47px")
                .setSelectable(false)
                .setCaption("UI Interaction<br>Without Code")
                .setHAlign("center")
                .setCustomStyle({
                    "KEY":{
                        "color":"#000000",
                        "background-color":"transparent",
                        "font-family":"verdana,geneva,sans-serif",
                        "font-size":"2em",
                        "font-weight":"bold",
                        "text-shadow":"0px 0px 9px transparent"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});