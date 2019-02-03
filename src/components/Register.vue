<template>
	<div class="container">
		<h2> Student Registration</h2>
		<hr/>
		<form class="form-horizontal" @submit.prevent="submitForm">

			<div class="form-group">
				<label class="col-sm-4 control-label">First Name</label>
				<div class="col-sm-6">
					<input type="text"
								 name="firstName"
					       class="form-control"
								 v-validate="'required'"
								 v-model='record.first_name'
								 placeholder="First Name"
								 autofocus>
					<div v-show="errors.has('firstName')"  class="help block alert alert-danger">
						{{ errors.first('firstName') }}
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Last Name</label>
				<div class="col-sm-6">
					<input type="text"
								 name="lastName"
					       class="form-control"
								 v-validate="'required'"
								 v-model='record.last_name'
								 placeholder="Last Name">
					<div v-show="errors.has('lastName')"  class="help block alert alert-danger">
						{{ errors.first('lastName') }}
					</div>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Gender</label>
				<div class="col-sm-6">
					<select class="form-control"
									name="gender"
									v-model='record.gender'>
							<option>M</option>
							<option>F</option>
						</select>
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-4 control-label">Year</label>
				<div class="col-sm-6">
					<select class="form-control"
									v-model='record.joined_year'>
							<option>2019</option>
							<option>2018</option>
							<option>2017</option>
						</select>
				</div>
			</div>

			<!-- <div class="form-group">
				<label class="col-sm-4 control-label">Teacher</label>
				<div class="col-sm-6">
					<select class="form-control"
									v-model='record.teacher'>
							<option>Emily</option>
							<option>Isabella</option>
  				</select>
				</div>
			</div> -->

			<div class="form-group">
				<div class="col-sm-offset-4 col-sm-6">
					<button type="submit"
									class="btn btn-default"
									>Submit</button>
				</div>
			</div>

		</form>
	</div>
</template>

<script>
	 export default {
		data() {
			return {
				record:{
					first_name:'First Name',
					last_name:'Last Name',
					gender:'M',
					joined_year:2019,
					// teacher:'Emily'
				}
			}
		},
		methods:{
			submitForm() {
				this.$http.post("http://kind_hub.test/api/students", this.record)
				.then(function (response) {
					this.$router.push('/list');
				})
			}
		}
	}
</script>
