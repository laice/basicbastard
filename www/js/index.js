/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    appenda: function() {
      var text = document.getElementById('text');
      text.value = text.value + "<a href=''></a>";
    },

    appendimg: function() {
      var text = document.getElementById('text');
      text.value = text.value + "<img src=''></img>";
    },

    appendp: function() {
      var text = document.getElementById('text');
      text.value = text.value + "<p></p>";
    },

    appendstyle: function() {
      var text = document.getElementById('text');
      text.value = text.value + "<span style=\"\"></span>";
    },

    clear: function() {
      var title = document.getElementById('title');
      var author = document.getElementById('author');
      var text = document.getElementById('text');
      var tags = document.getElementById('tags');
      var id = document.getElementById('id');

      title.value = "";
      author.value = config.default_name;
      text.value ="";
      tags.value = "";
      id.value = "";
    },

    delPost: function() {
      var id = document.getElementById('id');
      if(id !== "") {
        window.open(`${config.host}/delete?key=${config.key}&id=${id.value}`)
      }
    },
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      this.receivedEvent('deviceready');

      switch(device.platform) {
        case "Android":
        case "iOS":
        case "BlackBerry":
        case "webOS":
        case "WinCE":
        case "Tizen":
          window.open = cordova.InAppBrowser.open;
          break;

      }


      var send = document.getElementById('send');
      var del = document.getElementById('delete');
      var view = document.getElementById('view')
      var clear = document.getElementById('clear');
      var pbtn = document.getElementById('pbtn')
      var abtn = document.getElementById('abtn');
      var imgbtn = document.getElementById('imgbtn');
      var stylebtn = document.getElementById('stylebtn');







      send.addEventListener('click', this.sendPost.bind(this));
      del.addEventListener('click', this.delPost.bind(this));
      view.addEventListener('click', this.view.bind(this));
      clear.addEventListener('click', this.clear.bind(this));
      pbtn.addEventListener('click', this.appendp.bind(this));
      abtn.addEventListener('click', this.appenda.bind(this));
      imgbtn.addEventListener('click', this.appendimg.bind(this));
      stylebtn.addEventListener('click', this.appendstyle.bind(this));

      var author = document.getElementById('author');
      author.value = config.default_name;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + id);
    },

    sendPost: function() {
        var title = document.getElementById('title');
        var author = document.getElementById('author');
        var text = document.getElementById('text');
        var tags = document.getElementById('tags');
        var id = document.getElementById('id');

        tags = tags.value.split(',');
        var ttags = "";
        tags.forEach(tag => {
             ttags = ttags+`&tags=${tag}`
        });



        if(!id.value) {

            window.open(`${config.host}/update?key=${config.key}&title=${title.value}&author=${author.value}&text=${text.value}${ttags}`)


        } else {

            window.open(`${config.host}/update?key=${config.key}&id=${id.value}&title=${title.value}&author=${author.value}&text=${text.value}${ttags}`)


        }

    },
    view: function() {
      window.open(config.host);

    }

};

app.initialize();