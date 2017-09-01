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

      window.open = cordova.InAppBrowser.open;

      var send = document.getElementById('send');
      var del = document.getElementById('delete');
      var view = document.getElementById('view');


      send.addEventListener('click', this.sendPost.bind(this));
      del.addEventListener('click', this.delPost.bind(this));
      view.addEventListener('click', this.view.bind(this));
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