<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Register</div>
          <div class="panel-body">
            <form class="form-horizontal" role="form" @submit.prevent="goregister">
              <div class="form-group">
                <label for="name" class="col-md-4 control-label">အမည္</label>
                <div class="col-md-6">
                  <input id="name" type="text" class="form-control" name="name" v-model="name" required autofocus>
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-md-4 control-label">ဖုန္းနံပါတ္</label>

                <div class="col-md-6">
                  <input id="email" type="number" class="form-control" name="phone" v-model="phone" required>
                  <template v-if="success === false">
                    <template v-if="error.phone !== undefined">
                    <span class="label label-danger">
                     <strong v-for="ep in error.phone">{{ep}}</strong>
                    </span>
                    </template>

                  </template>
                </div>

              </div>
              <div class="form-group">
                <label for="password" class="col-md-4 control-label">Password</label>
                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="password" required>
                  <template v-if="success === false">
                    <template v-if="error.password !== undefined">
                    <span class="label label-danger">
                     <strong v-for="epsw in error.password">{{epsw}}</strong>
                    </span>
                    </template>

                  </template>
                </div>

              </div>
              <div class="form-group">
                <label for="password-confirm" class="col-md-4 control-label">Password ၿပန္ထည့္ပါ</label>

                <div class="col-md-6">
                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="passwrod_confirmation" required>
                  <template v-if="success === false">
                    <template v-if="error.password_confirmation !== undefined">
                    <span class="label label-danger">
                     <strong v-for="epswc in error.password_confirmation">{{epswc}}</strong>
                    </span>
                    </template>

                  </template>
                </div>

              </div>
              <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                  <button type="submit" class="btn btn-primary">
                      တင္မည္
                  </button>
                </div>
              </div>
            </form>
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
                phone:'',
                password:'',
                passwrod_confirmation:'',
                name:'',
                error:'',
                success:'',
                hastoken:'',
                status: 'true',


            }
        },
        methods: {
            goregister: function () {
                var self=this;
                self.error='';
                self.success='';
                return axios({
                    method: 'post',
                    url: 'http://test.masterymyanmar.com/constructback/public/api/register',
                    data: {
                        phone: self.phone,
                        password: self.password,
                        password_confirmation:self.passwrod_confirmation,
                        name:self.name
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data);
                    if(response.data.success== false){
                        self.success=false;
                        self.error=response.data.data;
                        console.log(self.error.phone);
                    }
                    if(response.data.success== true){
                        localStorage.setItem('token',response.data.data);
                        window.location='/dashboard/formq/all';

                    }
                });
            }

        },
        created(){
            var self = this;
            return axios({
                method: 'post',
                url: 'http://test.masterymyanmar.com/constructback/public/api/dashboard',
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