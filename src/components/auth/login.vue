<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Login</div>
          <div class="panel-body">
            <form class="form-horizontal" role="form" v-on:submit.prevent="gologin">

              <div class="form-group">
                <label for="email" class="col-md-4 control-label">Phone No</label>

                <div class="col-md-6">
                  <input id="email" type="phone" class="form-control" name="phone" v-model="phone" required autofocus>

                  <template v-if="status === 'vfalse'">
                    <template v-if="error.phone !== undefined">

                    <span class="label label-info">
                     <strong v-for="ep in error.phone">{{ep}}</strong>
                    </span>
                    </template>

                  </template>

                </div>
              </div>

              <div class="form-group">
                <label for="password" class="col-md-4 control-label">Password</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" v-model="password" name="password" required>

                  <template v-if="status === 'vfalse'">
                    <template v-if="error.password !== undefined">
                    <span class="label label-info">
                     <strong v-for="eps in error.password">{{eps}}</strong>
                    </span>
                    </template>

                  </template>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-8 col-md-offset-4">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>

                  <a class="btn btn-link" href=""> Forgot Your Password? </a>
                </div>
              </div>

            </form>
            <template v-if="status == 'jfalse'">
              <div>
                <div class="alert alert-danger">
                  <strong>{{error}}</strong>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                phone: '',
                password: '',
                error: '',
                hastoken:'',
                status: 'true',
            }
        },

        methods: {
            clca: function () {
                return {
                    cache: false
                }
            },
            gologin: function () {
                var self = this;
                self.error = '';
                self.status = '';
                return axios({
                    method: 'post',
                    url: 'http://www.hivephing.com/constructback/public/login',
                    cache: false,
                    data: {
                        phone: self.phone,
                        password: self.password
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    if (response.data.success === 'vfalse') {
                        self.status = 'vfalse';
                        self.error = response.data.error;
                    } else if (response.data.success === 'jfalse') {
                        self.status = 'jfalse';
                        self.error = response.data.error;
                    } else {
                        localStorage.setItem("token", response.data.data.token);
                        console.log(localStorage.getItem("token"));
                        window.location = '/dashboard/proposals/all';
                    }

                });

            }
        },
        beforeMount(){
            var self = this;
            return axios({
                method: 'post',
                url: 'http://www.hivephing.com/constructback/public/api/dashboard',
                data: {
                    token: localStorage.getItem("token"),
                }, headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                self.hastoken = response.data[0];
                if(self.hastoken=== 'true'){
                    window.location = '/dashboard/proposals/all';
                }
                console.log(response.data[0]);
            });

        },
    }
</script>
