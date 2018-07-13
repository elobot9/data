var PostQModel = Backbone.Model.extend({
  initialize: function(){
    this.set('questions',{
      'familiarity' : ` 

      <!-- Music familiarity -->

        <div class = "row question">
          <div>
            How often do you intentionally listen to music? Please select from the options below.
          </div>

          <div>
            <select name="music-listening" id="music-listening">
              <option style="padding-left:Opx;" value=""></option>
              <option value="4">Every day</option>
              <option value="3">A few times a week</option>
              <option value="2">A few times a month</option>
              <option value="1">A few times a year</option>
              <option value="0">Almost never</option>
            </select>
          </div> 

         </div>

        <div class = "row question">
          <div>
            Approximately what percentage of the music you listen to could roughly be described as "classical"? Please select from the options below.
          </div>

          <div>
            <select name="percent-classical" id="percent-classical">
              <option style="padding-left:Opx;" value=""></option>
              <option value="0">0 - 25%</option>
              <option value="1">25 - 50%</option>
              <option value="2">50 - 75%</option>
              <option value="3">75 - 100%</option>
            </select>
          </div> 

         </div>
         

         <div class = "row question">
          <div>
            Do you play (or have you ever played) a musical instrument? If so, how long have you played that instrument? (If you play more than one instrument, select a value for the 
            instrument you have played the <strong>longest</strong>.)
          </div>

          <div>
            <select name="instrument-training" id="instrument-training">
              <option style="padding-left:Opx;" value=""></option>
              <option value="0">I do not play an instrument</option>
              <option value="1">less than 6 months</option>
              <option value="2">6 months - 1 year</option>
              <option value="3">1 - 5 years</option>
              <option value="4">5 - 10 years</option>
              <option value="5">10+ years</option>
            </select>
          </div> 

         </div>

        <div class = "row question">
          <div>
            <p>Do you have formal training in music theory (ex. harmony, counterpoint, analysis)? If so, how long have you studied music theory?</p>
          </div>

          <div>
            <select name="theory-training" id="theory-training">
              <option style="padding-left:Opx;" value=""></option>
              <option value="0">I have not studied theory</option>
              <option value="1">less than 6 months</option>
              <option value="2">6 months - 1 year</option>
              <option value="3">1 - 5 years</option>
              <option value="4">5 - 10 years</option>
              <option value="5">10+ years</option>
            </select>
          </div> 

        </div>

        <div class = "row question">
          <div>
            <p>Do you compose (or have you ever composed) music regularly? If so, how long have you been composing music for?</p>
          </div>

          <div>
            <select name="composition-time" id="composition-time">
              <option style="padding-left:Opx;" value=""></option>
              <option value="0">I do not compose music</option>
              <option value="1">less than 6 months</option>
              <option value="2">6 months - 1 year</option>
              <option value="3">1 - 5 years</option>
              <option value="4">5 - 10 years</option>
              <option value="5">10+ years</option>
            </select>
          </div> 

        </div>


        <div class = "row question">
          <div>
          Did you recognize any of the pieces or their composers? If so, fill them in in the boxes below.
          </div>

          <div>
          <input type="text" name="piece-1-familiarity">
          Piece 1 name
          </div>

          <div>
          <input type="text" name="composer-1-familiarity">
          Piece 1 Composer
          </div>

          <div>
          <input type="text" name="piece-2-familiarity">
          Piece 2 Name
          </div>

          <div>
          <input type="text" name="composer-2-familiarity">
          Piece 2 Composer
          </div>

         </div>

          <div class="button-div">
          <button class="btn btn-primary btn-lg button-next">Next</button>
          </div>
         `,

         'alteration_detection': `

         <!-- Detection of alterations -->

        <div class = "row question">
          <div>
          In this experiment, you listened to pieces of music, each about 2 minutes long.
          <br>
          <br>
          <i>Some of the participants in this experiment heard the original compositions of these two pieces,
          while some other participants listened to versions that had been broken up into segments and re-ordered </i>. 
          <br>
          <br>
          Do you think that you heard the original or the re-ordered version of the musical compositions?
          </div>
          <br>

          <div>
          For the <b>first piece</b>, do you think you heard the <b>original</b> or <b>re-ordered</b> version of the composition? 

          <div class="radio">
          <input type="radio" name="p1_version_guess" value="original">
          Original
          </div>

          <div class="radio">
          <input type="radio" name="p1_version_guess" value="reordered">
          Re-Ordered
          </div> 
          </div>

          <br>
          <div>
          For the <b>second piece</b>, do you think you heard the <b>original</b> or <b>re-ordered</b> version of the composition?

          <div class="radio">
          <input type="radio" name="p2_version_guess" value="original">
          Original
          </div>

          <div class="radio">
          <input type="radio" name="p2_version_guess" value="reordered">
          Re-Ordered
          </div> 
          </div>
        </div>

        <div class="button-div"> <button class="btn btn-primary btn-lg button-next">Next</button></div>
        `,

         'demographic_info': `  
          <form id='postquiz' action='debrief' method='post'>
         <!-- General experiment questions -->
        <div class = "row question">
          <div>
            Did you experience any technical difficulties during the experiment? If so, please elaborate in the box below.
          </div>

          <div>
           <input type='text' name='tech-difficulties' size='60' maxlength='400'/>
          </div>
        </div>

        <div class = "row question">
        <div>
        Did you have any difficulty understanding the instructions during the experiment? If so, please elaborate below.
        </div>

        <div>
        <input type='text' name='comm-difficulties' size='60' maxlength='400' />
        </div>
      </div>

        <!-- Demographic Info -->
        <!-- beginning of a question -->
            <div class="row question">
                <div class>
                    Have you encountered an experiment like this before? If so, please briefly describe.
                </div>
                <div>
                    <input type='text' name="prevExp "id='prevExp' size='60' maxlength='400' />
                </div>
            </div>
            <!-- end of a question -->

        <div class="row question">
                <div>
                    Please select your age group.   
                </div>
                <div>                    
            <select name="ageGroup" id="ageGroup" >
            <option style="padding-left:0px;" value="">Select your Age Group</option>
            <option value="19-">19-</option>
            <option value="20-24">20-24</option>
            <option value="25-29">25-29</option>
            <option value="30-34">30-34</option>
            <option value="35-39">35-39</option>
            <option value="40-44">40-44</option>
            <option value="45-49">45-49</option>
            <option value="50-54">50-54</option>
            <option value="55-59">55-59</option>
            <option value="60-64">60-64</option>
            <option value="65-69">65-69</option>
            <option value="70-74">70-74</option>    
            <option value="75-79">75-79</option>
            <option value="80-84">80-84</option>
            <option value="85+">85+</option>    
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    Please select your gender.
                </div>
                <div>
            <select name="gender" id="gender">
            <option style="padding-left:0px;" value="" >Select your Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="x">Neither/Prefer not to say</option>
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    Please select your dominant hand (i.e. Are you left or right handed?).
                </div>
                <div>
            <select name="handedness" id="handedness" value="">
            <option style="padding-left:0px;" >Select your Handedness</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    What languages did you speak before age 6?
                </div>
                <div>
                    <input type='text' name="languageBefore6" id='languageBefore6' size='60' maxlength='400' />
                </div>
        </div>
        <div class="row question">
                <div>
                    What languages do you speak fluently now? (Include languages listed in the above question if they still apply.)
                </div>
                <div>
                    <input type='text' name="languageNow" id='languageNow' size='60' maxlength='400' />
                </div>
    </div>

    </form>

    <button type="button" id="next" value="next" class="btn btn-primary btn-lg continue">
                    Continue <span class="glyphicon glyphicon-arrow-right"></span>
        </button>
`
    })

    this.set('question_data',{
      'familiarity': '',
      'alteration_detection': '',
      'demographic_info': ''
    })
  }
})